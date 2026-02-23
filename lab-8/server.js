import http from 'http';
import fs from 'fs'; 
import path from 'path'; //Para leer MIMES correctos

const MIME_TYPE = {
	".html":"text/html",
	".js":"text/javascript",
	".css":"text/CSS",
	".png":"image/png",
	".jpg":"image/jpg"
};

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


    let rutaArchivo = path.join(import.meta.dirname, requestUrl);
    console.log(rutaArchivo);
    //Importante __dirname: devuelve la ruta absoluta del directorio que contiene el archivo JavaScript actual.

    //extraemos la extensión del archivo -> de aqui obtenemos la llave del diccionario
    let extension = path.extname(rutaArchivo);

    let contentType = MIME_TYPE[extension] || 'application/octet-stream';

        fs.readFile('./index.html', (err, data) => {
            if (err){
            	//Caso 1: archivo no encontrado o inexistente
            	if(err.code === 'ENOENT'){
            		res.writeHead(404);
                	res.end('<h1>404: Recurso no encontrado</h1>');
            	}
            	else{
            	//Error de servidor
            	res.writeHead(500);
                res.end(`Error de servidor: ${err.code}`);

            	}
            	

            } 
            else {
                response.writeHead(200, {'Content-Type': contentType});
                response.end(data);
            }
        });
    	
   
}); // Aquí cerramos el createServer

server.listen(3000, () => {
    console.log("Servidor encendido en http://localhost:3000");
});