const sendResponse = require('./sendResponse');

const errorHandler = (err, req, res, next) => {
  let message = 'Internal Server Error';
  let statusCode = 500;

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue);
    message = `Duplicate field value: ${field}. Please use another value.`;
    statusCode = 400;
  }

  else if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(el => el.message);
    message = `Validation error: ${errors.join(', ')}`;
    statusCode = 400;
  }

  else if (err.name === 'CastError') {
    message = `Invalid ${err.path}: ${err.value}`;
    statusCode = 400;
  }

  else if (err.statusCode && err.message) {
    message = err.message;
    statusCode = err.statusCode;
  }

  return sendResponse(res, statusCode, false, message);
};

module.exports = errorHandler;
