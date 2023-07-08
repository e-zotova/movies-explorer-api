const { verifyJwtToken } = require('../utils/jwt');
const UnauthorizedError = require('../errors/unauthorized-error');

const extractBearerToken = (header) => header.replace('Bearer ', '');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('При авторизации произошла ошибка. Токен не передан или передан не в том формате.'));
  }
  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = verifyJwtToken(token);
  } catch (err) {
    return next(new UnauthorizedError('При авторизации произошла ошибка. Переданный токен некорректен.'));
  }

  req.user = payload;
  return next();
};

module.exports = auth;
