function alerta() {
    alert("Haz presionado el boton");
}

function confirmacion() {
    var resultado = confirm("Desea confirmar?");
    if(resultado) {
        alert("Aceptaste");
    } else {
        alert("No aceptaste")
    }
}
function ingreseNombre() {
    var nombre = prompt("Ingrese su nombre");
    document.write("Hola " + nombre + "!")
}

var boton1 = document.getElementById('alerta');
var boton2 = document.getElementById('confirmacion');
var boton3 = document.getElementById('ingrese-nombre');

boton1.onclick = alerta
boton2.onclick = confirmacion
boton3.onclick = ingreseNombre