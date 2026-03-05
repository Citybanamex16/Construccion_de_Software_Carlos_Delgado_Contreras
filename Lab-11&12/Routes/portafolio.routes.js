
//Bibliotecas y modulos nativos
const express = require('express');
const router = express.Router();



//Llamado a Controllador 
const portController = require('../Control/portafolio.controller.js');

//Middlewares Ruteo EJS
router.get("/main",portController.getPort);
router.get("/labs",portController.getLabs);



module.exports = router;