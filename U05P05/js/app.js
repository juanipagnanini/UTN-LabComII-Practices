const dado = document.getElementById('dado1')
const limpiar = document.getElementById('limpiar')
const total = document.getElementById('suma')
const contenedor = document.getElementById('contenedor-resultado')

let suma = 0
let repeticion = 1

dado.addEventListener('click', function() {
    let dado6caras = parseInt(6 * Math.random() + 1)
    total.style.visibility = "visible"

    suma += dado6caras
    
    total.innerHTML = "Total: " + suma
    const valorDado = document.createElement('p')
    valorDado.innerHTML = "Dado N° " + repeticion + ": " + dado6caras + " "
    valorDado.className = "dados"
    iconoDado(valorDado)
    contenedor.appendChild(valorDado)
    repeticion++

})

limpiar.addEventListener('click', function() {
    while (contenedor.hasChildNodes()) {
        contenedor.removeChild(contenedor.lastChild);
    }
    repeticion = 1
    suma = 0
    
    total.style.visibility = "hidden"
    
})

function iconoDado(valorDado) {
    let icono = document.createElement('i')
    icono.className = "fa-solid fa-dice"
    valorDado.appendChild(icono)
}