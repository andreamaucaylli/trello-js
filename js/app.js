window.addEventListener("load", function () {
	var contenedor = document.getElementById("contenedor");
	var origen = document.getElementById("origen");

	origen.addEventListener("click", function (e) {
		e.preventDefault();
		nuevaLista(contenedor);
	});

	function nuevaLista (contenedor) {
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
	}
});
