const User = require("../../models/User.js");

async function finalUser(req, res) {
  try {
    const { name, email, role, password } = req.query;
    const nameRegex = new RegExp(name, "i");
    const emailRegex = new RegExp(email, "i");
    const query = { name: nameRegex, email: emailRegex };
    if (role) {
      query.role = role;
    }
    if (password) {
      query.password = password;
    }
    const finalResult = await User.find(query);
    if (!finalResult) {
      return res
        .status(400)
        .json({ message: "user is not serached successfully" });
    }
    return res.status(200).json({ message: "user is searched successfully",data:finalResult });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { finalUser };
