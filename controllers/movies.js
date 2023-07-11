const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const BadRequestError = require('../errors/bad-request-error');

const {
  validationError,
  invalidDataMovieMessage,
  movieNotFoundMessage,
  deleteMovieForbiddenMessage,
} = require('../utils/constants');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user.id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  req.body.owner = req.user.id;

  Movie.create(req.body)
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err.name === validationError) {
        return next(new BadRequestError(invalidDataMovieMessage));
      }
      return next(err);
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(new NotFoundError(movieNotFoundMessage))
    .then((movie) => {
      if (movie.owner.toString() !== req.user.id) {
        return next(new ForbiddenError(deleteMovieForbiddenMessage));
      }

      return movie.deleteOne().then(() => res.status(200).send(movie));
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};
