const cartService = require('../services/cart.service');

const getCart = async (req, res, next) => {
  try {
    const cart = await cartService.getCartByUserId(req.user.id);
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = await cartService.addProductToCart(req.user.id, productId, quantity);
    res.json(cartItem);
  } catch (error) {
    next(error);
  }
};

const removeProductFromCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const result = await cartService.removeProductFromCart(req.user.id, productId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateCartItemQuantity = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const result = await cartService.updateCartItemQuantity(req.user.id, productId, quantity);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCart,
  addProductToCart,
  removeProductFromCart,
  updateCartItemQuantity,
};
