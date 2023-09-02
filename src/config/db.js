const mongoose = require("mongoose");
const { DATABASE_URL } = require("../../secret");

const connectDb = async () => {
  return await mongoose.connect(DATABASE_URL, { autoIndex: true });
};

module.exports = connectDb;
