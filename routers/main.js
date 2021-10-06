const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controllers/mainController");

// Rutas
mainRouter.get("/", mainController.index);
mainRouter.get("/about", mainController.about);

module.exports = mainRouter;
