const express = require("express");
const orderController = require("../controllers/order.controller");
const { protect, isAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", protect, orderController.createOrder);
router.get("/:id", protect, orderController.getOrderById);
router.get("/user/:userId", protect, orderController.getOrdersByUserId);
router.put("/:id/status", protect, isAdmin, orderController.updateOrderStatus);

module.exports = router;
