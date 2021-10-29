const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", {
      productsSend: products,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => {
      return product.id == id;
    });
    res.render("detail", {
      productsSend: product,
    });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    res.send("Nuevo producto creado");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => {
      return product.id == id;
    });
    res.render("product-edit-form", {
      productsSend: product,
    });
  },
  // Update - Method to update
  update: (req, res) => {
    res.send("Producto " + req.params.id + " editado");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    res.send("Producto " + req.params.id + " eliminado");
  },
};

module.exports = controller;
