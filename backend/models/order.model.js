const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  comment: { type: String },
  country: { type: String, required: true },
  address: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  cart: { type: Array, required: true },
});

module.exports = mongoose.model('Order', ordersSchema);
