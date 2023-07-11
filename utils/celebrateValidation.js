const { celebrate, Joi } = require('celebrate');

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

const validateCreateUser = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().required().min(2).max(30),
    }),
  },
);

const validateLoginUser = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
);

const validateProfileInfo = celebrate(
  {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().required().min(2).max(30),
    }),
  },
);

const validateCreateMovie = celebrate(
  {
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().regex(urlRegex),
      trailerLink: Joi.string().required().regex(urlRegex),
      thumbnail: Joi.string().required().regex(urlRegex),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  },
);

const validateMovieById = celebrate(
  {
    params: Joi.object().keys({
      id: Joi.string().required().hex().length(24),
    }),
  },
);

module.exports = {
  validateCreateUser,
  validateLoginUser,
  validateProfileInfo,
  validateCreateMovie,
  validateMovieById,
};
