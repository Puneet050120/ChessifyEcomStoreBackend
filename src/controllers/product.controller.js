const ProductService = require("../services/product.service");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

exports.createProduct = async (req, res) => {
  try {
    const payload = req.body;
    console.log(`Inside controller payload is : ${JSON.stringify(payload)}`);

    const productsArray = Array.isArray(payload) ? payload : [payload];

    // Basic validation
    for (const product of productsArray) {
      if (!product.name || !product.price || !product.category) {
        return res.status(400).json({
          success: false,
          message: 'Each product must have name, price, and category.',
        });
      }
    }

    const result = await ProductService.createProduct(productsArray);

    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating product(s):', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
