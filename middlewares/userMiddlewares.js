const fs = require("fs");
const path = require("path");
const logPath = path.join(__dirname, "../logs/userLogs.txt");

function userMiddlewares(req, res, next) {
  fs.appendFileSync(logPath, "El usuario ingreso a la ruta " + req.url + "\n");

  next();
}

module.exports = userMiddlewares;
