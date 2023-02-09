// Elements DOM structure
const selector = document.getElementById("selector"); // selector de la cuidad
const consultar = document.getElementById("consultar"); // botton para consultar
const result = document.getElementById("section-weather-result"); // sección donde se muestran los resultados


function addCity() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {   /* Cuando no hay ciudades agregadas muestra un mensaje "Debe agregar ciudad"*/
        selector.innerHTML += `<option value="" disabled selected>Debe agregar ciudad</option>`
    } else {
        selector.innerHTML += '<option value="" disabled selected>Seleccionar Ciudad</option>'
        for (let i = 0; i < cities.length; i++) {
            selector.options.add(new Option(cities[i], cities[i]))
        }
    }
    console.log('funcionando')
}

consultar.onclick = async function () {   
    result.innerHTML = loader;
    

    data = await consultAPI(selector.value, true);  /* Espera a que retorne el objeto de una consulta API*/
    
    //creamos los resutados (hijos)
    const card = document.createElement('div')

    const nombreCiudad = document.createElement("h3")
    const icono = document.createElement("img")
    const temp = document.createElement("p")
    const sesacionTermica = document.createElement("p")    /*Creamos los elementos necesarios para mostrar el objeto JSON*/
    const humedad = document.createElement("p")
    const viento = document.createElement("p")
    const presion = document.createElement("p")

    card.setAttribute("class", "card")
    card.setAttribute("id","eliminar")
    icono.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    
    nombreCiudad.textContent = data.name
    temp.textContent = `Temperatura: ${data.main.temp}°` 
    sesacionTermica.textContent = `Sensación Térmica: ${data.main.feels_like}°`  /* Agregamos como contenido a esos elementos creados el contenido del objeto JSON*/
    humedad.textContent = `Humedad: ${data.main.humidity}%`
    viento.textContent = `Velocidad del Viento: ${data.wind.speed}km/h`
    presion.textContent = `Presión: ${data.main.pressure} P`

    card.appendChild(nombreCiudad)
    card.appendChild(icono)
    card.appendChild(temp)
    card.appendChild(sesacionTermica)      /*Finalmente, appendeamos esos elementos ya con el contenido como hijos*/
    card.appendChild(humedad)
    card.appendChild(viento)
    card.appendChild(presion)

    setTimeout(function() {
        result.innerHTML= "";             /* Contemplacion del escenario de carga*/
        result.appendChild(card);
        },1500); 
}

addCity();