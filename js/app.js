window.addEventListener("load", function() {
	var ocultar = document.getElementById("listaOculta");
	var mostrar = document.getElementById("form");
	var boton = document.getElementById("boton");
	var cerrar = document.getElementById("cerrar");
	ocultar.addEventListener("click", function() {
		ocultar.style.display = "none";
		mostrar.style.display = "block";
	});

	cerrar.addEventListener("click", function() {
		mostrar.style.display = "none";
		ocultar.style.display = "block";
	});

});