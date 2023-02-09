const boton = document.getElementById('boton')
let resultado =document.getElementById('resultado')

boton.addEventListener('click', function(event) {
    event.preventDefault();
    let numero = document.getElementById('numero1')
    numero = parseFloat(numero.value)
    
    if (isNaN(numero)) {
        resultado.innerHTML = "El campo no puede estar vacio"
    } else {
        if (Number.isInteger(numero) === true) {
            if (numero >= 0) {
                let producto = 1
                for (let i = 1 ; i <=numero ; i++) {
                    producto*= i
                }
                resultado.innerHTML = "El factorial de " + numero + " es: " + producto
            } else {
                resultado.innerHTML = "El numero DEBE ser mayor a 0"
            }
        } else {
            resultado.innerHTML = "El numero DEBE ser un numero entero"
        }
    }


    resultado.style.visibility = "visible"

    setTimeout(() => {
        resultado.style.visibility = "hidden" 
    }, 2000);
})