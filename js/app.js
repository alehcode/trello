window.addEventListener("load", function() {
	var anadirLista = document.getElementById("anadirLista");
	var formulario = document.getElementById("formulario");
	var textoImput = document.getElementById("textoImput");
	var guardar = document.getElementById("guardar");
	var cerrar = document.getElementById("cerrar");
	var caja = document.getElementById("caja");
	var cajaLista = document.getElementById("cajaLista");
	
	anadirLista.addEventListener("click", function() {
		anadirLista.style.display = "none";
		formulario.style.display = "block";
		textoImput.focus();
	});

	cerrar.addEventListener("click", function() {
		formulario.style.display = "none";
		anadirLista.style.display = "block";
	});

	guardar.addEventListener("click", function() {
		formulario.style.display = "none";
		anadirLista.style.display = "block";

	});

	guardar.addEventListener("click", function() {
		guardarNombreTarjeta(textoImput);
	});

	function guardarNombreTarjeta(imputForm){
		var tituloTarjeta = document.createElement("div");
		tituloTarjeta.innerText = imputForm.value;
		cajaLista.insertBefore(tituloTarjeta,cajaLista.childNodes[0]);
	}
});
		// var nuevaTarjeta = document.createElement("div");
		// var nodo = document.createElement("h5");
		// var nodoDos = document.createElement("a");
		// nodoDos.cursor = "pointer";
		// nodoDos.setAttribute("id","enlace");
		// var nodoTitulo = document.createTextNode(lista.value);
		// var nodoNuevo = document.createTextNode("Añadir una tarjeta");
		// nodo.appendChild(nodoTitulo);
  //       nodoDos.appendChild(nodoNuevo);
  //      	nuevaTarjeta.appendChild(nodo);
  //       nuevaTarjeta.appendChild(nodoDos);
  //       nuevaTarjeta.classList.add("Tarjeta"); ocultar.parentNode.insertBefore(nuevaTarjeta,ocultar.previousSibling);
  //       nuevaTarjeta.style.cssFloat = "Left";
  //       ocultar.style.display = "inline-Block";
  //       lista.style.display = "none";