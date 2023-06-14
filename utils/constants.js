const validationError = 'ValidationError';
const invalidDataMovieMessage = 'Invalid data when creating a movie';
const invalidDataUserMessage = 'Invalid data when creating a user';
const invalidIdUserMessage = 'Invalid user id';
const notFoundError = 'DocumentNotFoundError';
const movieNotFoundMessage = 'Movie is not found';
const userNotFoundMessage = 'DocumentNotFoundError';
const deleteMovieForbiddenMessage = 'It is not allowed to delete other user\'s movie';
const conflictError = 11000;
const userConflictMessage = 'User already exists';

module.exports = {
  validationError,
  invalidDataMovieMessage,
  invalidDataUserMessage,
  invalidIdUserMessage,
  notFoundError,
  movieNotFoundMessage,
  userNotFoundMessage,
  deleteMovieForbiddenMessage,
  conflictError,
  userConflictMessage,
};
