const express = require("express");
const {
  uploadingimages,
} = require("../Controllers/imageuploading/imageCloudinary");
const uploads = require("../middleware/multerMiddleware");
const imageRoutes = express.Router();

//
imageRoutes.post("/images", uploads, uploadingimages);

module.exports = imageRoutes;
