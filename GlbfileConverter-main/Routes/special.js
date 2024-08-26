const express = require("express");
const {
  postSpecial,
  postOrder,
  getOrder,
} = require("../Controller/specialRequestController");
const Router = express.Router();

Router.post("/addspecial", postSpecial);
Router.post("/order", postOrder);
Router.get("/order/get", getOrder);

module.exports = Router;
