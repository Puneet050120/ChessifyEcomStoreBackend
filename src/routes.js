const express = require('express');
const router = express.Router();
const ProductRoutes = require("./routes/product.routes");
const UploadRoutes = require("./routes/upload.routes");
const UserRoutes = require("./routes/user.routes");
const CategoryRoutes = require("./routes/category.routes");

router.use('/products', ProductRoutes);
router.use('/upload', UploadRoutes);
router.use('/auth', UserRoutes);
router.use('/categories', CategoryRoutes);

router.get('/', (req, res) => {
  res.status(200).send('Server is Up');
});

module.exports = router;
