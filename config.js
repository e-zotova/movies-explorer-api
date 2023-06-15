require('dotenv').config();

const {
  MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  PORT = 3000,
  JWT_SECRET,
  NODE_ENV,
} = process.env;

module.exports = {
  MONGO_URL,
  PORT,
  JWT_SECRET,
  NODE_ENV,
};
