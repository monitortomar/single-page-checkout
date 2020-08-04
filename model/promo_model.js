const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
  code: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
});

const Promo = mongoose.model("promo", PromoSchema, "promo");

module.exports = Promo;
