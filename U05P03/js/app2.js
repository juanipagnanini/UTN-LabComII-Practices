const boton2 = document.createElement('button');
boton2.innerHTML = "Calcular";
boton2.type = "button"


const formNumeros = document.getElementById('form-numeros')

const resultado = document.getElementById("resultado")


function paridad (...c) {
    let pares = 0
    let impares = 0
    c.forEach( function  (numero) {
            if ( numero % 2 === 0) {
                pares++
            } else {
                impares++
            }
    })
    
    return "Cantidad de pares: " + pares + ". Cantidad de impares: " + impares + ". "
} 


var cantidad2 = prompt("Ingrese cantidad de numeros:")





function generarForm (cantidad) {
    //Creo label
    var nuevolabel = document.createElement('label');
    nuevolabel.innerHTML = "Ingrese los numeros:";
    document.getElementById('form-numeros').appendChild(nuevolabel);
    document.getElementById('form-numeros').appendChild(document.createElement('br'));

    formNumeros.style.border = "1px solid #000"
    
    for (let i = 0; i < cantidad ;i++ ) {
        //creo label por numero
        var nuevolabel = document.createElement('label');
        nuevolabel.innerHTML = "Ingrese numero:";
        document.getElementById('form-numeros').appendChild(nuevolabel);

        var nuevohijo = document.createElement('input');
        nuevohijo.type = 'number';
        nuevohijo.name = 'numero' + cantidad;
        nuevohijo.id = 'numero' + cantidad;
        document.getElementById('form-numeros').appendChild(nuevohijo);
        document.getElementById('form-numeros').appendChild(document.createElement('br'));
    }

    
    document.getElementById('form-numeros').appendChild(boton2);

}

boton2.addEventListener('click', function () {
    
    let numero1 = document.getElementById('numero1')
    let numero2 = document.getElementById('numero2')
    let numero3 = document.getElementById('numero3')
    let numero4 = document.getElementById('numero4')
    let numero5 = document.getElementById('numero5')

    switch(cantidad2) {
        case 1:
            resultado.innerHTML = paridad(numero1.value)
        case 2:
            resultado.innerHTML = paridad(numero1.value, numero2.value)
        case 3:
            resultado.innerHTML = paridad(numero1.value, numero2.value, numero3.value)
        case 4:
            resultado.innerHTML = paridad(numero1.value, numero2.value, numero3.value, numero4.value)
        case 5:
            resultado.innerHTML = paridad(numero1.value, numero2.value, numero3.value, numero4.value, numero5.value)

    }

})


generarForm(cantidad2)