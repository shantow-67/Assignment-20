const customError = require("../src/utils/customError");

const notFoundHandler = (req, res, next) => {
  const error = customError("route not found", 404);
  next(error);
};

module.exports = notFoundHandler;
