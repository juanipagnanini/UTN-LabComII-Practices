function calcularMayor() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var num3 = document.getElementById('num3').value
    
    if(num1 > num1 & num1 > num3) {
        alert("El numero mayor es:" + num1)
    } else {
        if (num2 > num1 & num2 > num3) {
            alert("El numero mayor es:" + num2)
        } else {
            alert("El numero mayor es:" + num3)
        }
    }
}

function positivoONegativo() {
    var num4 = document.getElementById('num4').value
    
    if (num4 > 0) {
        alert("Su numero es positivo.")
    } else {
        if (num4 == 0) {
            alert("Su numero es cero.")
        } else {
            alert("Su numero es negativo")
        }
    }
}

function calcularPromedio() {
    var nombre = document.getElementById('nombre').value;
    var preguntas = parseInt(document.getElementById('cantPreguntas').value);
    var aciertos = parseInt(document.getElementById('cantCorrectas').value);

    var resultado = document.getElementById('resultado');
    var resultadoContenido = " "
    var porcentaje = (aciertos*100) / preguntas

    if (aciertos > preguntas) {
        resultadoContenido = "Error: cantidad de aciertos es mayor a cantidad de preguntas"
    } else {
        switch(true) {
            case porcentaje < 50:
                resultadoContenido = "Fuera de nivel"
                break;
            case porcentaje < 75:
                resultadoContenido = "Nivel regular"
                break;
            case porcentaje < 90:
                resultadoContenido = "Nivel medio"
                break;
            case porcentaje >= 90:
                resultadoContenido = "Nivel superior"
            break;
        }
    }
    resultado.style.border = "solid";
    resultado.style.borderWidth = "2px";
    resultado.style.borderRadius = "10px";
    resultado.style.borderColor = "gray";
    resultado.style.padding = "5px";
    resultado.style.margin = "2px"
    resultado.style.fontStyle = "italic"

    if (aciertos > preguntas) {
        resultado.innerHTML = resultadoContenido
    } else {
        resultado.innerHTML = "Nivel del postulante " + nombre + ": " + resultadoContenido
    }


}

