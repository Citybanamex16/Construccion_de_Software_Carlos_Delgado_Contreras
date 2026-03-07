// Modulos Nativos
const http = require('http');
const path = require('path');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser

//Express
const express = require('express')
const app = express();


//Configuración de Carpetas estaticas 
app.use(express.static(path.join(__dirname,'Public')));

//Conf de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false })); // Esto hace el parseo por ti


//Routers
const shopRoutes = require('./Routes/shop_routes.routes.js');
const portRoutes = require('./Routes/portafolio.routes.js');


app.use('/shop',shopRoutes);
app.use('/port',portRoutes);
//app.use('/labs',labRoutes);


//Middlewares Ruteo EJS
app.get("/",(request,response) =>{
    response.redirect('/shop/');

});




//Middleware de Error 
app.use((request,response) =>{
        console.log(`¡Page not found!: ${request.url}`);
        const errorfile = path.join(__dirname,'Public','error404.html');
        response.status(404).sendFile(errorfile);
})

app.listen(3000,() => {
        console.log('Servidor activo en http local host: 3000');
    });




