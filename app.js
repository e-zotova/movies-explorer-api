const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./utils/logger');
const handleErrorMiddleware = require('./middlewares/handleErrorMiddleware');
const { MONGO_URL, PORT } = require('./config');
const rateLimiter = require('./utils/ratelimiter');

const app = express();
app.use(cors());

mongoose.connect(MONGO_URL, {});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(helmet());
app.use(rateLimiter);

app.use(router);
app.use(errorLogger);
app.use(handleErrorMiddleware);

app.listen(PORT, () => {});
