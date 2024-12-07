const express = require("express");
const { createAccount, loginup } = require("../Controllers/Auth/index.js");
const authRoutes = express.Router();

//
authRoutes.post("/account", createAccount);
authRoutes.post("/logined", loginup);

module.exports = authRoutes;
