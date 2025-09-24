const orderService = require("../services/order.service");

class OrderController {
  async createOrder(req, res, next) {
    try {
      const { userId, shippingAddress } = req.body;
      const order = await orderService.createOrder(userId, shippingAddress);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req, res, next) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrdersByUserId(req, res, next) {
    try {
      const orders = await orderService.getOrdersByUserId(req.params.userId);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async updateOrderStatus(req, res, next) {
    try {
      const { status } = req.body;
      const order = await orderService.updateOrderStatus(req.params.id, status);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
