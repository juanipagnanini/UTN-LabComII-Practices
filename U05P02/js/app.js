 let boton = document.getElementById('boton')
 let imagen = document.getElementById('imgPokemon')

boton.addEventListener('click', function () {
    let pokeId = document.getElementById('idPoke').value

    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokeId;
    
    fetch(url, {
        method: 'GET',
    }).then(response => console.log(response.json()))
        .catch(error => console.log('Error:', error))
})

