const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: String, required: true },
});

const Product = mongoose.model("product", ProductSchema, "product");

module.exports = Product;
