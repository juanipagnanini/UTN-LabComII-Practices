const keyApi = "5f94e48b399568406478b35bf52fbbef"; //Clave obtenida de la webAPI
const loader = '<div class="loader-animation"><div></div><div></div><div></div></div>'; //loader


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);   /* parseo para poder almacenar arreglo de ciudades en formato JSON. Por defecto localStorage almaecena strings*/
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(city, flag=false) {
    let send = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric&lang=es`)
    .then(response => { if (response.ok){ 
            return response.json();   /* Si la query está okay devuelve el objeto en formato JSON*/
        } else {
            throw Error(); 
        }})
    .then(data => { if (flag){
            return data
        }
        return true
    })
    .catch(err => {
        return false  
    })

    return send;
}
                    