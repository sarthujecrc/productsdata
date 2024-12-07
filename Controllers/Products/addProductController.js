const Product = require("../../models/Product.js");

async function addProducts(req, res) {
  try {
    const { name, bio, user } = req.body;
    if (!name || !bio || !user) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const saveProducts = await Product.create({
      name,
      bio,
      user,
    });
    await saveProducts.save();
    console.log(saveProducts);
    return res
      .status(200)
      .json({
        message: "products are added successfully",
        product: saveProducts,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addProducts };
