const User = require("../../models/User.js");

async function userAdmin(req, res) {
  try {
    const alluser = await User.find();
    if (!alluser || alluser.length === 0) {
      return res.status(400).json({ message: "no user is present" });
    }
    return res
      .status(200)
      .json({ message: "dashboard is created", data: alluser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { userAdmin };
