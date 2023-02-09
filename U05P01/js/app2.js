const parrafo2 = document.getElementById('parrafo2')

function random() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let random = Math.random()
            if (random > 0.5) {
                resolve("El proceso finalizo correctamente. El valor es: " + random);
            } else {
                reject("Error: El proceso fallo. El valor es: " + random);
            }


        }, 3000);
    });
}

async function test() {
    try {
        let response = await random();
        parrafo2.innerHTML = response
    } catch (error) {
        parrafo2.innerHTML = error
    }
    parrafo2.style.border = "1px solid #313131";
}

test();