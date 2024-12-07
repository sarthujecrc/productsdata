const User = require("../../models/User.js");

async function allUser(req, res) {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({ message: "all users not found" });
    }
    return res.status(200).json({ message: "users is found", data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}
module.exports = { allUser };
