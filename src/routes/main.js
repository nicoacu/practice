const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controllers/mainController");
const autorizacion = require("../../middlewares/auth");

// Rutas
mainRouter.get("/", mainController.index);

mainRouter.get("/admin", autorizacion, mainController.admin);

module.exports = mainRouter;
