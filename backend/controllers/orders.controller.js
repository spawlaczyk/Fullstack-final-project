const Order = require('../models/order.model');

exports.getAllOrders = async (req, res) => {
  try {
    const result = await Order.find();
    if(!result) res.status(404).json({ orders: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if(!result) res.status(404).json({ orders: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.addNewOrder = async (req, res) => {
  const { fullName, email, phone, comment, totalPrice, cart } = req.body;
  try {
    const newOrder = new Order({ fullName, email, phone, comment, totalPrice, cart });
    await newOrder.save();
    res.json(newOrder);
  } catch(err) {
    res.status(500).json(err);
  }
};
