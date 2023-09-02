const express = require("express");
const app = express();
const middleware = require("./middleware");
const errorHandler = require("./errorHandler");
const notFoundHandler = require("./notFoundHandler");
const router = require("../src/routes/api");

// middleware implement
app.use(middleware);

app.use(express.static("../public"));

// routing setup
app.use("/api/v1", router);

// notFoundHandler
app.use("*", notFoundHandler);

// default error handler middleware
app.use(errorHandler);

module.exports = app;
