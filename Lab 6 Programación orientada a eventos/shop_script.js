

//Constantes
const IVA = 0.16;


//clases
class carrito{
	constructor(){
		this.productos = [];
	}


	add_producto(name,quantity,price){
		const new_product = {name,quantity,price};
		this.productos.push(new_product);
	}
	get_productos(){
		const total_products = this.productos
		for(let i = total_products.length-1; i >= 0;i--){
			const prod = total_products[i];
			alert(`Producto en carrito #${i}: ${prod[0]},${prod[1]},${prod[2]}`)
		}
	}

	calcular_total(){
		let total = 0;
		for(const item of this.productos){
			total += (item.price + (item.price * IVA)) * item.quantity;
		}
		return total;

	}

}


class product{
	#price;
	#name;
	constructor(new_name,new_price){
		this.#name = new_name;
		this.#price = new_price;
	}

	get_price(){
		return this.#price;
	}

	get_name(){
		return this.#name;
	}

}

const game_frontline = new product("Frontline",500);
const game_mask = new product ("A Memory of Masks", 750);

const micarrito = new carrito();


//Diccionario de catalogo -> {id:producto} puente elemento == objeto
const catalogo_juegos = {
	"frontline":game_frontline,
	"mask":game_mask
};


//Conf de botones
alert("JS iniciando")
//Obtenemos html array de todos los botones
const buy_buttons = document.getElementsByClassName("buybutton");
set_buy_buttons(buy_buttons)


//Botones de cantidades de juego
const quantity_buttons = document.getElementsByClassName("cantidad");

//Ouput de total a pagar 
const total_a_pagar = document.getElementById("Total_pagar");
total_a_pagar.textContent = "Total en carrito: $0.00"



function update_total(){
	total_a_pagar.textContent = String(`Total en carrito: $${micarrito.calcular_total()}`);

}



//Event Handlers
function on_buy_button_pressed(event){
	//Al carrito de compras le agregamos el producto vinculado al boton de compra
	//Primero: obtenems el ID de boton que se presionó
	const id = event.currentTarget.id; //id unico del buy button
	const gameID = event.currentTarget.dataset.gameId;


	console.log(`este es mi GameID ${gameID}`);

	//Segundo, vinculamos el ID (es una llave en el diccionario) del boton con su correspondiente objeto 
	const producto_seleccionado = catalogo_juegos[id];

	if(producto_seleccionado){
		const product_price = producto_seleccionado.get_price();
		const product_name = producto_seleccionado.get_name();
		let new_quantity = 1;

		//Obtenems la cantidad correspondiente
		for(const button of quantity_buttons){
			if(button.dataset.gameId === gameID){
				console.log(`Vinculado ${button.dataset.gameID} con ${gameID}`);
				new_quantity = button.valueAsNumber;
				break;
			}
			else{
				new_quantity = 0;

			}

		}

		//actualizamos el carrito
		
		micarrito.add_producto(product_name,new_quantity,product_price);
		update_total();

		alert(`Agregado al carrito: ${new_quantity} ${product_name} por ${product_price} con ${IVA} de IVA`);
		const aviso = document.getElementById("confirmacion");
		aviso.textContent = `¡${product_name} añadido con exito!`
		setTimeout(
			() => {
				aviso.textContent = "";
			}, 2000
			)
	}
	
}


function hover_buy_button(event){

	let botton_a_modifcar = event.currentTarget

	botton_a_modifcar.classList.toggle('button-hover'); //Toggle es super util 
	// Toggle lo que hace es añadir/quitar una clase dependiendo de si existe o no
	//botton_a_modifcar.classList.toggle('is-hovered'); //Esto es de Bulma
	console.log("Sup")
}



function set_buy_buttons(buttons){
	for(const boton of buttons){
		boton.textContent = "¡Buy it now!"
		boton.addEventListener("click",on_buy_button_pressed,false);
		boton.addEventListener("mouseover",hover_buy_button,false);
		boton.addEventListener("mouseout",hover_buy_button,false);

	}

}



