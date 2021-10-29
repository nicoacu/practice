const mainController = {
  index: (req, res) => {
    res.render("index");
  },
  admin: (req, res) => {
    res.send("Hola admin ${user}");
  },
};

module.exports = mainController;
