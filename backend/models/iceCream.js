// models/iceCream.js

const mongoose = require('mongoose');

const IceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  customer_rating: {
    type: Number,
    required: true
  },
  
//   updated_date: {
//     type: Date,
//     default: Date.now
//   }
});

module.exports = iceCream = mongoose.model('icecreams', IceCreamSchema);