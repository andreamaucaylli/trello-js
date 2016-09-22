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
		var input = document.createElement("input");
		var boton = document.createElement("button");
		var textoBoton = document.createTextNode("Añadir");
		
		boton.appendChild(textoBoton);
		contenedor.insertBefore(form, contenedor.childNodes[0]);
		form.insertBefore(input, form.childNodes[0]).classList.add("texto");
		form.insertBefore(boton,form.childNodes[1]).classList.add("agregar");
		contenedor.classList.add("contenedor");

		boton.addEventListener ("click", function (e) {
			e.preventDefault();
			/*listaVacia(texto);*/
			agregarContenidoLista (input, contenedor);

		});
		
		function agregarContenidoLista (input, contenedor) {
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
