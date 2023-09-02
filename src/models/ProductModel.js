const { Schema, model } = require("mongoose");

const dataSchema = Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v > 0;
      },
      message: "price will be positive value",
    },
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value.",
    },
  },
  category: { type: String, required: true },
  imageURL: { type: String },
});

const ProductModel = model("Products", dataSchema);

module.exports = ProductModel;
