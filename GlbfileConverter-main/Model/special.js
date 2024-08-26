const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RegisterSpecialSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = RegisteredSpecial = mongoose.model(
  "RegisteredSpecial",
  RegisterSpecialSchema
);
