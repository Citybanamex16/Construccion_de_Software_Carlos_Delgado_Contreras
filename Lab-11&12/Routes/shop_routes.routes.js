const express = require('express');
const router = express.Router();
const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser
const fs = require('fs');


//constantes y estructuras de datos.
 const breadcrumbsForms = [
        {name: "Shop", url: "/"},
        {name: "Charlie's Portafolio", url: "/port/main"},
        {name: "labs", url: "/port/labs"}
    ]

const listaComentarios = [
    { name: "Sistema", texto: "¡Sé el primero en comentar!" }
];



//Middleware de ruteo EJS
router.get("/forms",(request,response) =>{
    console.log(`Helo from middleware for /forms -> Client requests: ${request.url}`)
    //Leemos nuestro HTML
    let breadcrumbs = breadcrumbsForms;
    response.render('forms',{breadcrumbs,listaComentarios});
});


//Middleware de ruteo POST
router.post("/enviar-forms",(request,response) =>{
        console.log("¡Recibiendo respuesta de cliente!");
        //Paso 1: recibir los datos
        let body = '';

        request.on('data', chunk => {
        body += chunk.toString(); 
                });

        //paso 2 traducirlos
        request.on('end',() =>{

        console.log(`Body crudo: ${body}`);
        const datos = querystring.parse(body);

        //Creamos un numero comentario en la lista de comentarios
         listaComentarios.push({
            name: datos.nombre_usuario,
            texto: datos.review
        });
        

        console.log("Datos recibidos en archivo .txt:", datos.nombre_usuario);


        //paso 3: responder
        response.redirect('forms');


        });
});

module.exports = router;