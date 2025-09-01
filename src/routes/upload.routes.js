const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller');

// POST /upload/image
router.post('/image', uploadController.uploadImage);

module.exports = router;
