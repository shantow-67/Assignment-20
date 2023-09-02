const customError = (message = "Something Went Wrong", status = 404) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = customError;
