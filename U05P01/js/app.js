const parrafo = document.getElementById('parrafo')


var myPromise = new Promise(function (resolve, reject) {
    setTimeout( function () {

        let random = Math.random()
        if (random > 0.5) {
            resolve("El proceso finalizo correctamente. El valor es: " + random);
        } else {
            reject("Error: El proceso fallo. El valor es: " + random);
        }


    }, 3000);
});


myPromise 
    .then(function(value) {
        parrafo.innerHTML = value
        parrafo.style.border = "1px solid #313131";
    })
    .catch (function (error) {
        parrafo.innerHTML = error
        parrafo.style.border = "1px solid #313131";
    })

