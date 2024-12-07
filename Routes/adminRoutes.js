const express = require("express");
const { userAdmin } = require("../Controllers/AdminPanel/dashboardUser");
const { verifyToken } = require("../middleware/verifyToken");
const { verifyRole } = require("../middleware/verifyUser");
const adminRoutes = express.Router();

//
adminRoutes.post("/admindashboard", verifyToken, verifyRole("admin"), userAdmin);

module.exports = adminRoutes;
