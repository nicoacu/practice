const express = require("express");
const path = require("path");

const mainController = {
  index: (req, res) => {
    const archivo = path.join(__dirname, "../views/home.html");
    res.sendFile(archivo);
  },

  about: (req, res) => {
    const archivo = path.join(__dirname, "../views/about.html");
    res.sendFile(archivo);
  },
};

module.exports = mainController;
