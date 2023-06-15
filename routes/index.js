const router = require('express').Router();
const { errors } = require('celebrate');
const { login, createUser } = require('../controllers/users');
const userRouter = require('./users');
const movieRouter = require('./movies');
const authMiddleware = require('../middlewares/auth');
const { validateCreateUser, validateLoginUser } = require('../utils/celebrateValidation');

const NotFoundError = require('../errors/not-found-error');

router.post('/signin', validateLoginUser, login);
router.post('/signup', validateCreateUser, createUser);

router.use('/users', authMiddleware, userRouter);
router.use('/movies', authMiddleware, movieRouter);
router.use('/*', authMiddleware, (req, res, next) => next(new NotFoundError('Page is not found')));
router.use(errors());

module.exports = router;
