const Product = require("../../models/Product.js");

async function finalUser(req, res) {
  try {
    const { name, bio } = req.query;
    const nameRegex = new RegExp(name, "i");
    const bioRegex = newRegExp(bio, "i");
    const finalUser = await Product.find(query);
    if (!finalUser) {
      return res
        .status(400)
        .json({ message: "users is not serached successfully" });
    }
    return res.status(200).json({ message: "user is searched successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { finalUser };
