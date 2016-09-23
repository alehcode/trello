window.addEventListener("load", function() {
	var ocultar = document.getElementById("listaOculta");
	var mostrar = document.getElementById("form");
	var boton = document.getElementById("boton");
	var cerrar = document.getElementById("cerrar");
	var lista = document.getElementById("lista");
	ocultar.addEventListener("click", function() {
		ocultar.style.display = "none";
		mostrar.style.display = "block";
	});

	cerrar.addEventListener("click", function() {
		mostrar.style.display = "none";
		ocultar.style.display = "block";
	});

	boton.addEventListener("click", function() {
		var nuevaTarjeta = document.createElement("div");
		var nodo = document.createElement("h5");
		var nodoDos = document.createElement("a");
		nodoDos.cursor = "pointer";
		nodoDos.setAttribute("id","enlace");
		var nodoTitulo = document.createTextNode(lista.value);
		var nodoNuevo = document.createTextNode("Añadir una tarjeta");
		nodo.appendChild(nodoTitulo);
        nodoDos.appendChild(nodoNuevo);
       	nuevaTarjeta.appendChild(nodo);
        nuevaTarjeta.appendChild(nodoDos);
        nuevaTarjeta.classList.add("Tarjeta"); ocultar.parentNode.insertBefore(nuevaTarjeta,ocultar.previousSibling);
        nuevaTarjeta.style.cssFloat = "Left";
        ocultar.style.display = "inline-Block";
        lista.style.display = "none";

	});

});