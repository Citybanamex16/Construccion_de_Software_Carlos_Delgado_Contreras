const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:false}));


const header;

const formulario ;

const galeria;

const footer;


//Middleware
//Intermediario 
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Expresion regular
app.use("/new",(request, response, next) => {
	console.log(request.body);
	response.send("Aqui vamos a registrar mi pagina")
})

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);




