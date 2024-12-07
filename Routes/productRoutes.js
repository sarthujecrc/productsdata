const express = require("express");
const {
  addProducts,
  deletedProduct,
  allProduct,
  oneProduct,
  finalUser,
  updatedProduct,
} = require("../Controllers/Products/index");
const ProductRoutes = express.Router();

// end points
ProductRoutes.get("/serach", finalUser);
ProductRoutes.post("/added", addProducts);
ProductRoutes.delete("/deleted/:id", deletedProduct);
ProductRoutes.get("/allProd", allProduct);
ProductRoutes.get("/onePro/:id", oneProduct);
ProductRoutes.put("/updated/:id", updatedProduct);

module.exports = ProductRoutes;
