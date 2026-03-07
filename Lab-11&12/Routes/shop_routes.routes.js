const express = require('express');
const router = express.Router();


const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser
const fs = require('fs');


//Controllador 
const shopController = require('../Control/shop.controller.js');


//Middleware de ruteo
router.get("/forms",shopController.getForms);
router.get("/",shopController.getShop)
router.post("/enviar-forms",shopController.postForms);


module.exports = router;