const express = require('express');
const router = express.Router();
const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser
const fs = require('fs');

//funciones a utilizar 

function write_file(text){
  fs.writeFileSync("Cliente",text);

}


router.get("/forms",(request,response) =>{
    console.log(`Helo from middleware for /forms -> Client requests: ${request.url}`)
    //Leemos nuestro HTML
       const filePath = path.join(__dirname,'..','Public','Shop_HTMLs','forms.html');

        //Mandamos el archivo
        response.sendFile(filePath,(err) =>{
            if(err){
                response.status(500,'Error Interno');
            }
        })
});


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
        

        console.log("Datos recibidos en archivo .txt:", datos.nombre_usuario);

        write_file(datos.comentario);

        //paso 3: responder
        response.send(`<h1>¡Gracias ${datos.nombre_usuario}!</h1><p>Recibimos tu mensaje.</p>`);

        });
});

module.exports = router;