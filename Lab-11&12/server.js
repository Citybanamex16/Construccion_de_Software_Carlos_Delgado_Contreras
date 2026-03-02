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


//Routers
const shopRoutes = require('./Routes/shop_routes.routes.js');
const portRoutes = require('./Routes/portafolio.routes.js');


app.use('/shop',shopRoutes);
app.use('/port',portRoutes);


//Middlewares Ruteo EJS
app.get("/",(request,response) =>{
    console.log(`Client requests: ${request.url}`)
    //Preparamos BreadCrumbs;
    const breadcrumbs = [
        {name: "Charlie's Portafolio", url: "/port/main"},
        {name: "Comment Section", url: "/shop/forms"},
        {name: "labs", url: "/port/labs"}
    ]

    //Renderizamos el archivo
    response.render('index',{breadcrumbs});
    


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




