const { userInfo } = require("os");
const Product = require("../../models/Product.js");

async function addProductwithUserController(req, res) {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "User",
          foreignField: "user",
          localField: "_id",
          as: "Users",
        },
      },
      {
        $project: {
          name: 1,
          id: 0,
        },
      },
    ];
    const userProduct = await Product.aggregate(pipeline);
    if (!userProduct) {
      return res.status(400).json({ message: "product with useris not found" });
    }
    return res.status(200).json({ message: "product with user data is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addProductwithUserController };
