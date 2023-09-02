const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const dataSchema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  address: { type: String },
  phoneNumber: { type: String },
});

const UserModel = model("Users", dataSchema);

module.exports = UserModel;
