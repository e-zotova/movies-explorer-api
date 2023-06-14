const bcrypt = require('bcryptjs');
const { getJwtToken } = require('../utils/jwt');

const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');
const ConflictError = require('../errors/conflict-error');
const BadRequestError = require('../errors/bad-request-error');

const {
  validationError,
  invalidDataUserMessage,
  invalidIdUserMessage,
  conflictError,
  userConflictMessage,
  notFoundError,
  userNotFoundMessage,
} = require('../utils/constants');

const createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then(() => {
      res.status(201).send({
        email,
        name,
      });
    })
    .catch((err) => {
      if (err.name === validationError) {
        return next(new BadRequestError(invalidDataUserMessage));
      }
      if (err.code === conflictError) {
        return next(new ConflictError(userConflictMessage));
      }
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = getJwtToken(user.id);
      res.send({ token });
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user.id)
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === notFoundError) {
        return next(new NotFoundError(userNotFoundMessage));
      }
      return next(err);
    });
};

const updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    { email, name },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === validationError) {
        return next(new BadRequestError(invalidIdUserMessage));
      }
      if (err.name === notFoundError) {
        return next(new NotFoundError(userNotFoundMessage));
      }
      return next(err);
    });
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
  updateUserInfo,
};
