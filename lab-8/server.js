import http from 'http';
import fs from 'fs'; // Corregido: 'fs'

const server = http.createServer((request, response) => { 
    
    if (request.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Error en el servidor: No se encontro el archivo');
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    } else {
        response.writeHead(404);
        response.end('404: No encontrado en el Backend');
    }
}); // Aquí cerramos el createServer

server.listen(3000, () => {
    console.log("Servidor encendido en http://localhost:3000");
});