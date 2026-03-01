// Modulos Nativos
const http = require('http');
const fs = require('fs');
const querystring = require('node:querystring'); //Nativa de Node a diferencia de BodyParser


const server = http.createServer((request,response) => {
	//Atendemos peticiones de Cliente de manera 
	// lineal con Ifs anidados
	console.log(`Client requests: ${request.url}`)

	//Caso 1: Pagina Principal
	if(request.url === '/'){
		//Leemos nuestro HTML
		fs.readFile('Public/index.html',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/plain'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/html'})
				response.end(data);


			}
		})
	}

	//Caso 1.2: Bulma CSS
	else if (request.url =='/bulma.min.css'){
		//Leemos nuestro CSS
		fs.readFile('Public/bulma.min.css',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/plain'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/css'})
				response.end(data);


			}
		})

	}

	//Caso 1.3: Nuestro CSS
	else if (request.url =='/style.css'){
		//Leemos nuestro CSS
		fs.readFile('Public/style.css',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/plain'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/css'})
				response.end(data);


			}
		})

	}

	//Caso 1.4: Nuestro main JS
	else if (request.url =='/main.js'){
		//Leemos nuestro JS
		fs.readFile('Public/main.js',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/javascript'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/javascript'})
				response.end(data);


			}
		})

	}

	//Imagenes

	//Caso imagen A: Nuestro main JS
	else if (request.url =='/FrontLine.png'){
		//Leemos nuestro JS
		fs.readFile('Public/FrontLine.png',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/javascript'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/javascript'})
				response.end(data);


			}
		})

	}

	//Caso imagen B: Nuestro main JS
	else if (request.url =='/Mask.png'){
		//Leemos nuestro JS
		fs.readFile('Public/Mask.png',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/javascript'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/javascript'})
				response.end(data);


			}
		})

	}


	//Caso 2: Formulario
	else if (request.url == '/forms'){
		//Leemos nuestro CSS
		fs.readFile('Public/forms.html',(err,data) => {
			// función de lectura de File
			//Caso A: Hubo un error en la lectura en el servidor
			if(err){
				response.writeHead(500,{'Content-Type':'text/plain'})
				response.end('Error interno en servidor, no se encontro el archivo');
			}
			else{
				response.writeHead(200,{'Content-Type':'text/html'})
				response.end(data);


			}
		})

	}


	// 2.1: Caso de envio en Forms
	else if(request.url == '/enviar-forms' && request.method == "POST"){
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
		

		console.log("Datos recibidos:", datos.nombre_usuario);


		//paso 3: responder
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(`<h1>¡Gracias ${datos.nombre_usuario}!</h1><p>Recibimos tu mensaje.</p>`);

		});
		

		
	}



	else{
		response.writeHead(404,{'Content-Type':'text/plain'});
		console.log('Ruta inexistente')
		response.end('¡Ruta Inexistente!');

	}



});


server.listen(3000,() => {
		console.log('Servidor activo en http local host 3000');
	});