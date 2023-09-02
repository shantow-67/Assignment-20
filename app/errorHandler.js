const errorHandler = (error, _req, res, _next) => {
  console.log(error);
  const message = error.message ? error.message : "internal server error";
  const status = error.status ? error.status : 500;
  res.status(status).json({
    message,
  });
};

module.exports = errorHandler;
