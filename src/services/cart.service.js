const prisma = require('../models/prismaClient');

const getCartByUserId = async (userId) => {
  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  return cart;
};

const addProductToCart = async (userId, productId, quantity) => {
  const cart = await getCartByUserId(userId);

  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingCartItem) {
    return prisma.cartItem.update({
      where: {
        id: existingCartItem.id,
      },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
    });
  }

  return prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      quantity,
    },
  });
};

const removeProductFromCart = async (userId, productId) => {
  const cart = await getCartByUserId(userId);

  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingCartItem) {
    return prisma.cartItem.delete({
      where: {
        id: existingCartItem.id,
      },
    });
  }

  return null;
};

const updateCartItemQuantity = async (userId, productId, quantity) => {
  const cart = await getCartByUserId(userId);

  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingCartItem) {
    if (quantity <= 0) {
      return prisma.cartItem.delete({
        where: {
          id: existingCartItem.id,
        },
      });
    }

    return prisma.cartItem.update({
      where: {
        id: existingCartItem.id,
      },
      data: {
        quantity,
      },
    });
  }

  return null;
};

module.exports = {
  getCartByUserId,
  addProductToCart,
  removeProductFromCart,
  updateCartItemQuantity,
};
