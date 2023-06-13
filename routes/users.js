const userRouter = require('express').Router();
const { validateProfileInfo } = require('../middlewares/celebrateValidation');

const {
  getCurrentUser,
  updateUserInfo,
} = require('../controllers/users');

userRouter.get('/me', validateProfileInfo, getCurrentUser);
userRouter.patch('/me', validateProfileInfo, updateUserInfo);

module.exports = userRouter;
