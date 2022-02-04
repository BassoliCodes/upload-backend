const {Router} = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = Router()

routes.post("/", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, key, location: url = "" } = req.file;

  console.log(name, size, key, url);

  return res.status(200).json({
    status: 200,
    message: 'Enviado com sucesso!'
  })
});

module.exports = routes;
