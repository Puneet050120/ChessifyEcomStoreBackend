const productService = require("../services/product.service");

exports.getAllProducts = async (req, res) => {
//   const products = await productService.getAllProducts();
const products = [{
    image: 'https.....',
    name: 'abc',
    description: 'xyz',
    price: 10,
    inStock: true
}]
  res.json(products);
};

exports.createProduct = async (req, res) => {
//   const product = await productService.createProduct(req.body);
  res.status(201).json('product');
};
