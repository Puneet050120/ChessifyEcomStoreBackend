// src/middlewares/requestContext.middleware.js
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const requestContextMiddleware = (req, res, next) => {
  const requestId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  asyncLocalStorage.run({ requestId }, () => {
    next();
  });
};

module.exports = requestContextMiddleware;
module.exports.asyncLocalStorage = asyncLocalStorage;
