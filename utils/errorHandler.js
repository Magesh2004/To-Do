// middlewares/errorHandler.js
const sendResponse = require('./sendResponse');

const errorHandler = (err, req, res, next) => {
  let message = 'Internal Server Error';
  let statusCode = 500;

  // MongoDB duplicate key error (e.g., duplicate email)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue);
    message = `Duplicate field value: ${field}. Please use another value.`;
    statusCode = 400;
  }

  // Validation error
  else if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(el => el.message);
    message = `Validation error: ${errors.join(', ')}`;
    statusCode = 400;
  }

  // CastError (e.g., invalid ObjectId)
  else if (err.name === 'CastError') {
    message = `Invalid ${err.path}: ${err.value}`;
    statusCode = 400;
  }

  // Custom thrown errors
  else if (err.statusCode && err.message) {
    message = err.message;
    statusCode = err.statusCode;
  }

  // Send the error response
  return sendResponse(res, statusCode, false, message);
};

module.exports = errorHandler;
