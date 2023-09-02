const { Schema, model } = require("mongoose");

const dataSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v > 0;
      },
      message: "quantity will be positive integer",
    },
  },
});

const CardItemModel = model("CardItems", dataSchema);

module.exports = CardItemModel;
