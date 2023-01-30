const mongoose = require("mongoose");
const Product = require("./product.model");

const cartSchema = mongoose.Schema({
  id: String,
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: Product },
      quantity: Number,
    },
  ],
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
