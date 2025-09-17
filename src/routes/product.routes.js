const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/search", productController.searchProducts);
router.get("/", productController.getAllProducts);
router.post("/create", productController.createProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.post('/admin/products/bulk-upload', productController.bulkUploadProducts);

module.exports = router;
