// Modulos Nativos
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser

//Express
const express = require('express')
const app = express();

//funciones a utilizar 

function write_file(text){
  fs.writeFileSync("Cliente",text);

}

//Configuración de Carpetas estaticas 
app.use(express.static(path.join(__dirname,'Public')));
app.use('/assets',express.static(path.join(__dirname,'Public/Assets')));

//Routers
const shopRoutes = require('./Routes/shop_routes.routes.js');

app.use('/shop',shopRoutes);

app.listen(3000,() => {
        console.log('Servidor activo en http local host: 3000');
    });




