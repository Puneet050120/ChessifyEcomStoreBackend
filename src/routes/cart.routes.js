const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { protect } = require('../middlewares/auth.middleware');

router.get('/', protect, cartController.getCart);
router.post('/', protect, cartController.addProductToCart);
router.delete('/', protect, cartController.removeProductFromCart);
router.put('/', protect, cartController.updateCartItemQuantity);

module.exports = router;
