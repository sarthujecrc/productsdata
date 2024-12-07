const cloudinary = require("cloudinary");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const multer = require("multer");
const path = require("path");
const { isModuleNamespaceObject } = require("util/types");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadingimages(req, res) {
  try {
    const images = req.files;
    if (!images || images.length === 0) {
      return res.status(400).json({ message: "no image is found" });
    }
    const uploadsResult = [];
    for (const image of images) {
      const uploadResult = await cloudinary.uploader.upload(image.path);
      uploadsResult.push(uploadResult);
    }
    return res
      .status(200)
      .json({ message: "image is upload successfully", data: uploadsResult });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  } finally {
    try {
      const images = req.files;
      for (const image of images) {
        fs.unlinkSync(image.path);
      }
      console.log("image is deleted successfully");
    } catch (error) {
      console.log("image is not deleted successfully");
    }
  }
}

module.exports = { uploadingimages };
