const { addUser } = require("./addUserController.js");
const { deletedUser } = require("./deleteUserController.js");
const { allUser } = require("./getAllUserController.js");
const { oneUser } = require("./getUserController.js");
const { finalUser } = require("./searchUserController.js");
const { updateUser } = require("./updateUserController.js");

module.exports = {
  addUser,
  deletedUser,
  allUser,
  oneUser,
  finalUser,
  updateUser,
};
