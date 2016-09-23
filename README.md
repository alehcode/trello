# trello
1. Version 0.0.1
2. Se quiere realizar:
3. Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.
4. Solución:
5. En Html creamos un div contenedor.
6. Dentro del div, crearemos un span y un Form.
7. el span se llamará "Añadir Lista" 
8. Dentro del form crearemos un imput  y un boton "Guardar"
9. El form permanecera oculto , para ello en Css le daremos display:"none"
10. Luego en JS haremos que el form aparesca al darle click a span 
11. Span desaparecera y aparecera el form.
12. pasos:
13. 

13. window.addEventListener("load", function() {
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
