const movieRouter = require('express').Router();
const {
  validateCreateMovie,
  validateMovieById,
} = require('../utils/celebrateValidation');

const {
  getMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateMovieById, deleteMovieById);

module.exports = movieRouter;
