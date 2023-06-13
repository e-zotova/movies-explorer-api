const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const BadRequestError = require('../errors/bad-request-error');

const getMovies = (req, res, next) => {
  Movie.find({})
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
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Invalid data when creating a movie'));
      }
      return next(err);
    });
};

const deleteMovieById = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .orFail(new NotFoundError('Movie is not found'))
    .then((movie) => {
      if (movie.owner.toString() !== req.user.id) {
        return next(new ForbiddenError('It is not allowed to delete other user\'s movie'));
      }

      return Movie.deleteOne(movie).then(() => res.status(200).send(movie));
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};
