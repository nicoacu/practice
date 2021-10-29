const users = ["Ada", "Tim"];

const autorizacion = (req, res, next) => {
  //Leer req.query user
  let user = req.query.user;

  //Si users NO incluye query user
  if (!users.includes(user)) {
    res.send("No autorizado");
  }

  next();
};

module.exports = autorizacion;
