const prisma = require("../models/prismaClient");

class OrderService {
  async createOrder(userId, shippingAddress) {
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } },
    });

    if (!cart || cart.items.length === 0) {
      throw new Error("Cart is empty");
    }

    // Check stock availability
    for (const item of cart.items) {
      if (item.product.stock < item.quantity) {
        throw new Error(`Not enough stock for ${item.product.name}`);
      }
    }

    const total = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        total,
        shippingAddress,
        items: {
          create: cart.items.map((item) => ({
            quantity: item.quantity,
            price: item.product.price,
            product: { connect: { id: item.productId } },
          })),
        },
      },
      include: { items: true },
    });

    // Decrease stock
    for (const item of cart.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } },
      });
    }

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    return order;
  }

  async getOrderById(orderId) {
    return prisma.order.findUnique({
      where: { id: parseInt(orderId) },
      include: { items: { include: { product: true } }, user: true },
    });
  }

  async getOrdersByUserId(userId) {
    return prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
    });
  }

  async updateOrderStatus(orderId, status) {
    return prisma.order.update({
      where: { id: parseInt(orderId) },
      data: { status },
    });
  }
}

module.exports = new OrderService();
