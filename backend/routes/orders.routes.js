const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orders.controller');

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.post('/order', OrderController.addNewOrder);

module.exports = router;
