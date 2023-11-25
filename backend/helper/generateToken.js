const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (userId) => {
  return jwt.sign({
    userId,
  }, config.JWT_SECRET_KEY);
};

module.exports = {generateToken};
