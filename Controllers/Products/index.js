const { addProducts } = require("./addProductController");

const { deletedProduct } = require("./deleteProductController");
const { allProduct } = require("./getAllProductController");
const { oneProduct } = require("./getOneProductController");
const { finalUser } = require("./searchProductController");
const { updatedProduct } = require("./updateProductController");

module.exports = {
  addProducts,
  deletedProduct,
  allProduct,
  oneProduct,
  finalUser,
  updatedProduct,
};
