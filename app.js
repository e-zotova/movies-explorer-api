const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleErrorMiddleware = require('./middlewares/handleErrorMiddleware');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(router);
app.use(errorLogger);
app.use(handleErrorMiddleware);

app.listen(PORT, () => {});
