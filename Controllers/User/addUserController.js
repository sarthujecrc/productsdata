const User = require("../../models/User.js");

async function addUser(req, res) {
  try {
    const { name, email, role, password } = req.body;
    if (!name || !email || !role || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const saveUser = await new User({
      name,
      email,
      role,
      password,
    });
    await saveUser.save();
    console.log(saveUser);
    return res.status(200).json({ message: "user is added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addUser };
