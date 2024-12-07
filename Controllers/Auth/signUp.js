const User = require("../../models/User.js");

async function createAccount(req, res) {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email alreday exist" });
    }
    const newUser = await new User({
      name,
      email,
      password,
      role,
    });
    await newUser.save();
    console.log(newUser);
    return res.status(200).json({ message: "user is created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { createAccount };
