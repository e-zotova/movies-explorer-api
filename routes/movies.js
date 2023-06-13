const movieRouter = require('express').Router();
const {
  validateCreateMovie,
  validateMovieById,
} = require('../middlewares/celebrateValidation');

const {
  getMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateMovieById, deleteMovieById);

module.exports = movieRouter;
