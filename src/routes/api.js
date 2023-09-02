const CardItemModel = require("../models/CartItemModel");
const OrderModel = require("../models/OrderModel");

const router = require("express").Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

router.post("/post", async (req, res, next) => {
  try {
    const result = await CardItemModel.create(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
