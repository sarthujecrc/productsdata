const Product = require("../../models/Product.js");

async function updatedProduct(req, res) {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(400)
        .json({ message: "user is not updated successfully" });
    }
    return res.status(200).json({
      message: "product is updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { updatedProduct };

/*

git init 
git add.
git commit -m "first commit"
git branch -m Main
git remote add 
 */
