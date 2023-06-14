const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleErrorMiddleware = require('./middlewares/handleErrorMiddleware');
const { mongodb } = require('./utils/config');
const rateLimiter = require('./utils/ratelimiter');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());

mongoose.connect(mongodb);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(helmet());
app.use(rateLimiter);

app.use(router);
app.use(errorLogger);
app.use(handleErrorMiddleware);

app.listen(PORT, () => {});
