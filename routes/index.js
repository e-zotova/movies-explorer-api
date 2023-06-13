const router = require('express').Router();
const { errors } = require('celebrate');
const { login, createUser } = require('../controllers/users');
const userRouter = require('./users');
const movieRouter = require('./movies');
const authMiddleware = require('../middlewares/auth');

const NotFoundError = require('../errors/not-found-error');

router.post('/signin', login); // validateLoginUser
router.post('/signup', createUser); // validateCreateUser

router.use('/users', authMiddleware, userRouter);
router.use('/movies', authMiddleware, movieRouter);
router.use('/*', authMiddleware, (req, res, next) => next(new NotFoundError('Page is not found')));
router.use(errors());

module.exports = router;
