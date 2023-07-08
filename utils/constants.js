const devsecret = 'secret-key';

const validationError = 'ValidationError';
const notFoundError = 'DocumentNotFoundError';
const conflictError = 11000;

const invalidDataMovieMessage = 'При сохранении фильма произошла ошибка';
const invalidDataUserMessage = 'При регистрации пользователя произошла ошибка.';
const invalidIdUserMessage = 'Неверный идентификатор пользователя.';

const movieNotFoundMessage = 'Фильм не найден.';
const userNotFoundMessage = 'Пользователь не найден';

const deleteMovieForbiddenMessage = 'Удалять фильмы другого пользователя запрещено.';
const userConflictMessage = 'Пользователь с таким email уже существует.';

module.exports = {
  devsecret,
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
