const express = require("express");
// security middleware import
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3000, //
  standardHeaders: true,
  legacyHeaders: false,
});

// middleware implement
const middleware = [
  morgan("dev"),
  cors(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ extended: true, limit: "50mb" }),
  helmet(),
  mongoSanitize(),
  hpp(),
  limiter,
];

module.exports = middleware;
