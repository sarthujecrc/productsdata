const express = require("express");
const {
  addUser,
  deletedUser,
  allUser,
  oneUser,
  finalUser,
  updateUser,
} = require("../Controllers/User/index");
const userRoutes = express.Router();

//
userRoutes.get("/final", finalUser);
userRoutes.post("/added", addUser);
userRoutes.delete("/delete/:id", deletedUser);
userRoutes.get("/users", allUser);
userRoutes.get("/oneuser/:id", oneUser);
userRoutes.put("/updated/:id", updateUser);

module.exports = userRoutes;
