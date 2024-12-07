const Product = require("../../models/Product.js");

async function oneProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).populate("user", "name email");
    if (!product) {
      return res.status(400).json({ message: "product is not found" });
    }
    return res.status(200).json({ message: "product is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { oneProduct };
