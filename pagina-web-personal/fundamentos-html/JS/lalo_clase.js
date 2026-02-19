
alert("Hola bienvenido al laboratorio de JavaScript")
const  favorito = prompt("Cual es tu videojuego favorito")
console.log("Tu juego favorito es " + favorito)

const jugar = prompt ("¿Quieres jugar: " + favorito + " ?")
const juegos = [favorito] //Añadimos el favorito

if(jugar){ //Si jugamos
	console.log("¡A jugar " + favorito + " !");
	const juegos_favoritos = prompt("Cuantos juegos favoritos tienes") //Size de loop


	

	for(let i = 0; i < juegos_favoritos;i++){
		let juego_nuevo = prompt("Añade un juego a tu repertorio")
		juegos.push(juego_nuevo)
}

}
else{
	console.log("Nos vemos despues");
}


console.log("Tus juegos favoritos son: " + juegos)


//Objetos

/**const consola{
	const nombre = "Xbox"
	const serie = "Series X"
	const modelo = " 2020"

} **/





function get_favorito(){
	return 
}



// funcion anonima
//Esto es un apuntador que localiza en memoria una función
 const vidas = () => {
 	console.log("Te quedan 3 vidas");
 }


 vidas();



 //Comportamiento a nuestra pagina


