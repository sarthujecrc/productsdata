const express = require("express");
const adminRoutes = require("./adminRoutes.js");
const authRoutes = require("./authRoutes.js");
const imageRoutes = require("./imageRoutes.js");
const ProductRoutes = require("./productRoutes.js");
const userRoutes = require("./userRoutes.js");
const routes = express.Router();

// end points
routes.use("/admin", adminRoutes);
routes.use("/auth", authRoutes);
routes.use("/image", imageRoutes);
routes.use("/product", ProductRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
