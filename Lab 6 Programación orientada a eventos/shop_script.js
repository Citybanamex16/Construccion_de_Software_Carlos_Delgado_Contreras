

//Conf de botones
alert("JS iniciando")
const buy_buttons = document.getElementsByClassName("buybutton");
set_buy_buttons(buy_buttons)





function set_buy_buttons(buttons){
	for(const boton of buttons){
		boton.textContent = "¡Buy it now!"
	}

}



