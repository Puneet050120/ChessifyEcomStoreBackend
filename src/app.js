const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');
const requestContextMiddleware = require('./middlewares/request-context.middleware');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());



// Register request context middleware
// app.use(requestContextMiddleware);

// Health check
app.get('/healthz', (req, res) => {
  // req.log.info('Health check hit'); // Use req.log instead of logger
  res.json({ message: 'Server is up' });
});

app.use('/api', router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

// Global error handler
// app.use(errorMiddleware);

module.exports = app;
