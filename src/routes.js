const express = require('express');
const router = express.Router();
const ProductRoutes = require("./routes/product.routes");

router.use('/products', ProductRoutes);

router.get('/', (req, res) => {
  res.status(200).send('Server is Up');
});

module.exports = router;
