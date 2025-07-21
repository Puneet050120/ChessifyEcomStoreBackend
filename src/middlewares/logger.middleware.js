const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info({
    requestId: req.requestId,
    context: 'request',
    method: req.method,
    url: req.originalUrl,
    headers: req.headers
  });

  next();
};

module.exports = requestLogger;
