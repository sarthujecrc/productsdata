const Product = require("../../models/Product.js");

async function deletedProduct(req, res) {
  try {
    const id = req.params.id;
    const deluser = await Product.findByIdAndDelete(id);
    if (!deluser) {
      return res
        .status(400)
        .json({ message: "product is not deletd successfully" });
    }
    return res.status(200).json({ message: "product is deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { deletedProduct };
