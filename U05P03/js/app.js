
const boton = document.getElementById('aceptar')

function paridad (numeros) {
    let pares = 0
    let impares = 0
    numeros.forEach( function (numero) {
            if ( numero % 2 === 0) {
                pares++
            } else {
                impares++
            }
    })
    
    return "Cantidad de pares: " + pares + "\nCantidad de impares: " + impares
} 

boton.addEventListener('click', function () {
    const cantidad = document.getElementById('nroCantidad').value
    let numeros = []
    for (let i = 0; i < cantidad; i++) {
        numero = prompt("Ingrese el " + (i+1) + "° numero:")
        numeros.push(numero)
    }
    
    alert(paridad(numeros))
})