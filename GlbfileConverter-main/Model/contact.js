const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RegisterContactSchema = new Schema({
  data: {
    type: [Object],
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});
module.exports = RegisteredContacts = mongoose.model(
  "RegisteredContacts",
  RegisterContactSchema
);
