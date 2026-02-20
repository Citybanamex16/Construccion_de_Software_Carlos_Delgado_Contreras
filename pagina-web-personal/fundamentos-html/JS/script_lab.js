


//1. ejercicio
const num_usuario = prompt("Dame un numero de tablas"); // entrada
document.write("<h1> Tabla dinámica </h1>");
document.write("<table border='1'>");
//orden de fila <tr>(row) + <th>(header de row) + <td>(datos)

document.write("<tr><th>Dato1</th><th>Dato2</th></tr>"); //Primera fila 

for (var i = 0; i < num_usuario; i++) {
	document.write("<tr>"); //Primera fila 
	
	document.write("<td>Fila" + (i+1) + "</td>");
		document.write("<td>valor" + (i*2) + "</td>");


	document.write("</tr>");
}

document.write("</table>");


//2.ejercicio
const num_1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const respuesta_correcta = num_1 + num2;
const begin_time = performance.now();
const res = prompt("¿Cual es la respuesta de " + num_1 + " + " + num2 + " ?");
const end_time = performance.now();

const total_time = (end_time - begin_time)/1000;

if(Number(res) === respuesta_correcta){
	alert("Respuesta correcta, tu tiempo fue de: " + total_time + " s");
}
else{
	alert("Eso no fue correcto");
}


//3. Contador



function contador(arreglo){

	let negativos = 0;
	let ceros = 0;
	let positivos = 0;

	for (let i = arreglo.length - 1; i >= 0; i--) {
		if(arreglo[i] < 0){
			negativos += 1;
		}
		else if(arreglo[i]>0){
			positivos += 1;
		}
		else{
			ceros += 1;
		}
		
	}

	const negativos_total = negativos;
	const ceros_totales = ceros;
	const positivos_totales = positivos;

	

	alert("Negativos totales: " + negativos_total + " ,Ceros totales: " + ceros_totales + " ,positivos totales: " + positivos_totales); 
}


function promedios(matriz){
	const promedios_finales = []
	for (var i = matriz.length - 1; i >= 0; i--) {
		let array = matriz[i];
		let total = 0;

		for (var j = array.length - 1; j >= 0; j--) {
			total += array[j];
		}
		promedios_finales[i] = (total/array.length);
	}

	
	let string_finales = "[ " + promedios_finales.join(" ") + " ]";
    alert("Los promedios finales fueron: " + string_finales);
}


function inverso(num){
	if(num < 10){
		alert("Numero menor que 10 no es valido")
		return 
	}
	let numer_string = num.toString(); //Convierte el numero en una cadena de string
	let string_separado = numer_string.split("");
	let string_invertido = string_separado.reverse();
	let invertido_unido = string_invertido.join("");
	let numero_invertido = parseInt(invertido_unido);

	alert("Tu numero original: " + num + " en forma invertida es: " + numero_invertido); 

}


const numeros = [-2,4,12,0,0,-5,-1];
contador(numeros);

const otros = [-2,0,4];
contador(otros);

const datos = [[10, 10, 10], [5, 0, 10], [8, 9, 10]];
promedios(datos);


const numero_a_invertir = prompt("Dame un numero a invertir")
inverso(Number(numero_a_invertir));



//Mini juego: entrena a tu heroe con matemáticas

//Objetos
class Hero{
	//Constructor
	//Siempre usamos el simbolo de protected(#) para que no se pueda acceder a un attr si no es por medio de metodos
	#level;
	constructor(new_name,new_gender){
		this.name = new_name;
		this.gender = new_gender;
		this.#level = 0;
	}

	level_up(){
		this.#level += 1;

	}

	get_stats(){
		return `${this.name} tus stats son las siguientes -> nivel: ${this.#level}`;
	}


}




const option = Number(prompt("¿Quieres jugar a Math Heroes? 1 = si, 0 = no"));


if(option === 1){
	//Inicio de juego
	const input_nombre = prompt("¿Qué nombre le pondras a tu heroe ?");
	const input_gender = prompt(`¿Que genero es ${input_nombre}?`);
	const myhero = new Hero(input_nombre,input_gender);
	const tiempo_limite = 2.5;

	const funciones_problemas = [random_multiplication,random_division];

	while(true){

		const action = Number(prompt("¿Que quieres hacer? 0 = salir, 1 = entrenar, 2 = ver stats"))
		
		if(action === 0){
			//Salir 
			break;

		}
		else if(action === 1){
			//entrenar
			let random_problem = funciones_problemas[Math.floor(Math.random() * funciones_problemas.length)]; //lo facil que era tener una funcion pick_random
			random_problem(myhero,tiempo_limite);
			continue;
		}

		else if(action === 2){
			// mostrar stats
			alert(myhero.get_stats());
			continue;
		}
		else{
			alert("Accion no valida intentalo de nuevo");
			continue;
		}


	}
	alert("¡Gracias por jugar!")

}
else{
	alert("Omitiendo juego");
}




//Funciones de minijuego

function random_multiplication(player,tiempo_limite){
	alert(`¡Tienes ${tiempo_limite}s para responder el problema!`)
	//1. dar numeros random y calcular su producto
	const factor_1 = Math.floor(Math.random() * 10);
	const factor_2 = Math.floor(Math.random() * 10);
	const product = factor_1 * factor_2;

	const timer1 = performance.now()
	const player_result = Number(prompt(`¿Cual es el resultado de la multipliación ${factor_1} * ${factor_2} = ?`))
	const timer2 = performance.now()

	const time_passed = (timer2 - timer1)/1000;

	if(validar_respuesta(player_result,product,time_passed,tiempo_limite)){
		player.level_up();
	}
	else{
		return;
	}


}


function random_division(player,tiempo_limite){
	alert(`¡Tienes ${tiempo_limite}s para responder el problema! -> redondea siempre hacia arriba`)
	//1. dar numeros random y calcular su cociente
	const divisor_1 = Math.floor(Math.random() * 10);
	const divisor_2 = Math.floor(Math.random() * 9) + 1;
	const cociente =  Math.ceil(divisor_1/divisor_2);

	const timer1 = performance.now()
	const player_result = Number(prompt(`¿Cual es el resultado de la divisón ${divisor_1} / ${divisor_2} = ?`))
	const timer2 = performance.now()

	const time_passed = (timer2 - timer1)/1000;

	if(validar_respuesta(player_result,cociente,time_passed,tiempo_limite)){
		player.level_up();
	}
	else{
		return;
	}

}



function validar_respuesta(resultado_jugador,resultado_correcto,total_time,tiempo_limite){

	if(total_time < tiempo_limite){ 
		if(resultado_jugador === resultado_correcto){
		alert("¡Respuesta correcta!")
		return true;
	}
	else{
		alert(`¡Incorrecto! El resultado era ${resultado_correcto}`);
		return false;
		}
	}
	else{
		alert(`¡Tiempo excedido, tardaste ${total_time} en responder el problema`)
	}

	
}



