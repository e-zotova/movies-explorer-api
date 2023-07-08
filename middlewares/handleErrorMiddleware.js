const handleErrorMiddleware = (err, req, res, next) => {
  res
    .status(err.statusCode)
    .send({ message: err.statusCode === 500 ? 'На сервере произошла ошибка.' : err.message });

  return next();
};

module.exports = handleErrorMiddleware;
