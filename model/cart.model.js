const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    info: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantitiy: {
          type: Number,
          default: 1,
        },
        productPrice: {
          type: Number,
        },
      },
    ],
    total: {
      type: Number,
    },
  },
  { timestamps: true, autoIndex: true, minimize: true }
);

const Cart = mongoose.model("Cart", cartSchema, "cart");

module.exports = Cart;
