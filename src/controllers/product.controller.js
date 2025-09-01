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
      if (!product.name || !product.price || !product.size) {
        return res.status(400).json({
          success: false,
          message: 'Each product must have name, price, and size.',
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

exports.updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }

    const updatedProduct = await ProductService.updateProduct(id, data);
    res.json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }

    await ProductService.deleteProduct(id);
    res.json({ success: true, message: 'Product deleted (soft)' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.bulkUploadProducts = async (req, res) => {
  try {
    const payload = req.body;

    if (!Array.isArray(payload) || !payload.length) {
      return res.status(400).json({ success: false, message: 'CSV payload must be a non-empty array' });
    }

    const result = await ProductService.bulkUpload(payload);
    return res.status(201).json({ success: true, ...result });

  } catch (error) {
    console.error('Bulk upload error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Server error' });
  }
};