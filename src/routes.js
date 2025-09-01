const express = require('express');
const router = express.Router();
const ProductRoutes = require("./routes/product.routes");
const UploadRoutes = require("./routes/upload.routes");

router.use('/products', ProductRoutes);
router.use('/upload', UploadRoutes);

router.get('/', (req, res) => {
  res.status(200).send('Server is Up');
});

module.exports = router;
