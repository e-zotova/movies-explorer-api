const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(router);
app.use(errorLogger);

app.listen(PORT, () => console.log('Server is started.'));
