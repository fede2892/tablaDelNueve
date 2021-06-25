var contenedor = document.getElementById("contenedor");
var formulario = document.getElementById("formulario");
var boton = document.getElementById("boton");

function multi(){
    for(i = 1; i <= 10; i++){
        var texto = document.createElement("p");
        texto.textContent = "9 x " + i + " = " + parseInt(9 * i);
        contenedor.appendChild(texto);
        console.log("9 x " + i + " = " + parseInt(9 * i));
        var salto = document.createElement("br");
        contenedor.appendChild(salto);
    }
    formulario.removeChild(boton);
}