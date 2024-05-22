const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: false,
      unique: true,
    },
    stock: {
      type: Schema.Types.Number,
      required: false,
    },
    description: {
      type: Schema.Types.String,
      required: false,
    },
    price: {
      type: Schema.Types.Number,
      required: false,
    },
    category: {
      type: Schema.Types.String,
      required: false,
    },
  },
  { minimize: true, timestamps: true, autoIndex: true }
);

const Product = mongoose.model("product", productSchema, "product");

module.exports = Product;
