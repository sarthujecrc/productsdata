const Product = require("../../models/Product.js");

async function allProduct(req, res) {
  try {
    const products = await Product.find().populate("user", "name email");
    if (!products) {
      return res.status(400).json({ message: "products not found" });
    }
    return res.status(200).json({ message: "products is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { allProduct };
