import http from 'http';
import fs from 'fs'; 
import path from 'path'; //Para leer MIMES correctos

const MIME_TYPE = {
	".html":"text/html",
	".js":"text/javascript",
    ".mjs": "text/javascript", //auxiliar por si las dudas, lo vi en internet
	".css":"text/css",
	".png":"image/png",
	".jpg":"image/jpeg"
};



const server = http.createServer((request,response) => {

    const urlRequested = request.url

    console.log(`¡Client requests!: ${urlRequested}`)

    //Caso 1: Pagina principal
    if(urlRequested === '/'){
        //Queremos rescatar nuestro HTML en los archivos
        fs.readFile('./index.html',(err,data) => {
            if(err){
                response.writeHead(500, {'Content-Type': 'text/plain'});
                //End es el que manda la información.
                response.end("Error en el servidor: No encontré el archivo");
            }
            else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.end(data);
                //Aqui va nuestro archivo :)
            }


        });
    }

    //Ultimo Caso: Algo que no existe
    else{
        response.writeHead(404);
        response.end("404: Nivel no encontrado");
    }


});


server.listen(3000, () => {
    console.log("Servidor encendido en http://localhost:3000");
});





/**
const server = http.createServer((request, response) => { 
    
    let requestUrl = "";

    if(request.url === '/'){
    	//Pagina principal
    	requestUrl = 'index.html';

    }
    else{
    	//Otro recurso de la pagina
    	requestUrl = request.url;
    }


    let rutaArchivo = path.join(process.cwd(), requestUrl);
    //Importante __dirname: devuelve la ruta absoluta del directorio que contiene el archivo JavaScript actual.

    //extraemos la extensión del archivo -> de aqui obtenemos la llave del diccionario
    let extension = path.extname(rutaArchivo).toLowerCase();
    //Minusculas porque CHROME ES SUPER ESTRICTO


    let contentType = MIME_TYPE[extension] || 'application/octet-stream';

    //Debug temporal -> deberia de dejar a main.js en paz ;(
    if (request.url.includes("main.js")) {
        contentType = "text/javascript";
    }

        fs.readFile(rutaArchivo, (err, data) => {
            if (err){
            	//Caso 1: archivo no encontrado o inexistente
            	if(err.code === 'ENOENT'){
            		response.writeHead(404);
                	response.end('<h1>404: Recurso no encontrado</h1>');
            	}
            	else{
            	//Error de servidor
            	response.writeHead(500);
                response.end(`Error de servidor: ${err.code}`);

            	}
            	

            } 
            else {
                console.log(`Enviando: ${rutaArchivo} | MIME: ${contentType}`);
                response.end(data);
            }
        });
    	
   
}); // Aquí cerramos el createServer


*/
