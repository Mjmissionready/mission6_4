// models/iceCream.js

const mongoose = require('mongoose');

const IceCreamSchema = new mongoose.Schema({
  flavor: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  customer_rating: {
    type: String,
    required: true
  },
  
  price: {
    type: String,
    required: true
  },

  //   updated_date: {
  //     type: Date,
  //     default: Date.now
  //   }
});

module.exports = iceCream = mongoose.model('iceCream', IceCreamSchema);