const devsecret = 'secret-key';

const validationError = 'ValidationError';
const notFoundError = 'DocumentNotFoundError';
const conflictError = 11000;

const invalidDataMovieMessage = 'При сохранении фильма произошла ошибка';
const invalidDataUserMessage = 'При регистрации пользователя произошла ошибка.';

const movieNotFoundMessage = 'Фильм не найден.';
const userNotFoundMessage = 'Пользователь не найден';

const deleteMovieForbiddenMessage = 'Удалять фильмы другого пользователя запрещено.';
const userConflictMessage = 'Пользователь с таким email уже существует.';

const updateProfileErrorMessage = 'При обновлении профиля произошла ошибка.';

module.exports = {
  devsecret,
  validationError,
  invalidDataMovieMessage,
  invalidDataUserMessage,
  notFoundError,
  movieNotFoundMessage,
  userNotFoundMessage,
  deleteMovieForbiddenMessage,
  conflictError,
  userConflictMessage,
  updateProfileErrorMessage,
};
