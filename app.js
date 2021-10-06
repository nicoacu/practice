const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main");

// Inicializando express
const app = express();

// Aclarando carpeta public
app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", mainRouter);

// Listening el puerto 3000
app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
