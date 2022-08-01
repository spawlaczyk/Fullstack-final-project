const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  minPrice: { type: Number, required: true },
  image: { type: String, required: true },
  mainColor: { type: String, required: true },
  description: { type: String, required: true },
  photos: { type: Array, required: true },
});

module.exports = mongoose.model('Product', productsSchema);
