/** 1. Importamos la librería SOLO UNA VEZ al inicio
const prompt = require('prompt-sync')();


// 2. Convertimos el input a Number inmediatamente
const num = Number(prompt("Dame un numero: "));
const num2 = Number(prompt("Dame un segundo numero: "));

// 3. Ahora la suma será matemática y no de texto
const result = num + num2;

console.log(num + " + " + num2 + " = " + result);

**/


//Meter en un nuevo archivo de .tx


console.log("hola desde node");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','Hola desde Node');



const arreglo = [5000,60,90,100,10];

for (let item of arreglo){
	setTimeout(() => { console.log(item);},item);
}
