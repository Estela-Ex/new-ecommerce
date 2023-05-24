const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

// Subir una o varias imágenes al servidor y base de datos
productRouter.post("/upload", productController.uploadImage);

module.exports = productRouter;
