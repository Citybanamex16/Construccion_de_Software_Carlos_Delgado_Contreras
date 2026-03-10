const mysql = require('mysql2');

//Pool de conexiones 
const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	database:'TiendaVideojuegos',
	password:'',
	waitForConnection:true,
	connectionLimit:10

});

module.exports = pool.promise(); //Habilitamos poder usar .then() & .catch()