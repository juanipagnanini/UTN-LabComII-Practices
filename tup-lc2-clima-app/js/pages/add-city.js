// Elementos DOM
const addCity = document.getElementById("addCity"); // Agarra el input de la ciudad ingresada
const alerts = document.getElementById("alerts"); // Agarra el section donde se van a mostrar las alertas
const agregar = document.getElementById("agregarCiudad"); // Boton Agregar del form

// MENSAJES DE STATUS
const messages = {
    exito: "Ciudad agregada con éxito",
    error: "Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar",
    cuidado: "La ciudad ingresada ya se encuentra almacenada",
}

agregar.onclick = async function() {  /* Cuando se pulsa el boton de Agregar Ciudad  almacenado en la constante linea 4 se llama a esta funcion*/
    alerts.innerHTML = loader;

    let cities = getCitiesFromLocalStorage();
    let newCity = addCity.value.toUpperCase();

    if(cities.includes(newCity)){    /* Ciudad ya ingresada -> larga una alerta*/
        alert = "cuidado";
    }else{
        if (await consultAPI(newCity)) {   /* Ciudad no ingresada -> consulta API para esa ciudad -> push al localstorage*/
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            alert = "exito";
        }
        else {
            alert = "error";  /* Ciudad no existe en la API -> informa la situacion al usuario */
        };
    }
    mostrarAlerts(alert);  /* Crea un elemento parrafo con el status de la operacion */
}

function mostrarAlerts(alert){
    const parrafo = document.createElement("p");
    parrafo.textContent = messages[alert];
    parrafo.classList.add("status", alert)

    setTimeout(function() {
        alerts.innerHTML = "";
        alerts.appendChild(parrafo); 
        },1500); 
}
