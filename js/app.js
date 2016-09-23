window.addEventListener("load", function () {
	var contenedor = document.getElementById("contenedor");
	var origen = document.getElementById("origen");
	var form = document.getElementById("form");

	origen.addEventListener("click", function (e) {
		e.preventDefault();
		var boton = document.createElement("button");
		nuevaLista(contenedor);
	});

	function nuevaLista (contenedor, boton) {
		origen.style.display = "none";

		var form = document.createElement("form");
		var input = document.createElement("input").classList.add("form-control");
		var boton = document.createElement("button");
		var textoBoton = document.createTextNode("Añadir");
		var icon = document.createElement("icon");
		
		boton.appendChild(textoBoton);
		contenedor.insertBefore(form, contenedor.childNodes[0]);
		form.insertBefore(input, form.childNodes[0]).classList.add("texto");
		form.insertBefore(boton,form.childNodes[1]).classList.add("agregar");
		form.insertBefore(icon, form.childNodes[2].classList.add("close"));
		
		contenedor.classList.add("contenedor");
		boton.style.display = "inline-block";
		boton.classList.add("btn-sucess", "btn-block", "btn", "btn-sm", "pull-left");
		icon.classList.add("icon-cross");
		icon.classList.add("cross");

		boton.addEventListener ("click", function (e) {
			e.preventDefault();
			/*listaVacia(texto);*/
			agregarContenidoLista (input, contenedor);
			//agregarNuevaLista();

		});
		
		function agregarContenidoLista (input, origen) {
			input.style.display = "none";
			boton.style.display = "none";

			var texto = input.value
			var nuevoContenedor = document.createElement("div");
			var agregarEntradaEnlace = document.createElement("a");
			var textoEnlace = document.createTextNode("Añadir una tarjeta...");

			agregarEntradaEnlace.appendChild(textoEnlace);
			nuevoContenedor.innerHTML = texto;
			form.insertBefore(nuevoContenedor, form.childNodes[0]);
			form.appendChild(textoEnlace);
			origen.parentNode.insertBefore(nuevoContenedor, origen.previousSibling);
			nuevoContenedor.style.cssFloat = "left";
			origen.style.display = "inline-block";
		}
}



/*	function publicar (texto, contenedorMensaje) {
 		contenedorMensaje.classList.add("formatoMensaje");
		contenedorMensaje.innerHTML = texto;
    	var mensajes = document.getElementById("mensaje");
    	mensajes.insertBefore(contenedorMensaje, mensaje.childNodes[0]);
	}*/

/*	function listaVacia (texto) {
		var cantidadCaracteres = texto.value.length;

		if (texto.value == null || texto.length == 0 || texto.value === "" || /^\s+$/.test(texto.value)) {
			boton.disabled = true;
		}
	}*/

});
