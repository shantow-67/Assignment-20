const { Schema, model } = require("mongoose");

const dataSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },

  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
});

const OrderModel = model("Orders", dataSchema);

module.exports = OrderModel;
