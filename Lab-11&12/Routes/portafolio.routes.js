const express = require('express');
const router = express.Router();
const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser
const fs = require('fs');


//Middlewares Ruteo EJS
router.get("/main",(request,response) =>{
    console.log(`Client requests: ${request.url}`)
    response.render('portafolio');


});


router.get("/labs",(request,response) =>{
    console.log(`Client requests: ${request.url}`)
    const filePath = path.join(__dirname,'..','Public','Portafolio_HTMLs','Laboratorios.html');

    //Mandamos el archivo

    response.sendFile(filePath,(err) =>{
        if(err){
            response.status(500,'Error Interno');
        }
    })


});



module.exports = router;