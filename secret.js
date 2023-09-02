require("dotenv").config();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_PASSWORD = process.env.JWT_PASSWORD;

module.exports = { PORT, DATABASE_URL, JWT_PASSWORD };
