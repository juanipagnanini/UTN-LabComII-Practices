var contLocal = localStorage.getItem('click') || 0;
var contSession = sessionStorage.getItem('click') || 0;

function contador() {
    var contador = document.getElementById('valorLocal')
    if (contLocal == 0) {
        contLocal = 1
        localStorage.setItem("click", contLocal)   
    } else {
        contLocal++
        localStorage.setItem("click", contLocal)
    }
    //Estilo
    contador.style.border = "1px solid #000000"
    contador.style.borderRadius = "15px"
    contador.innerText = contLocal
}

function contador2() {
    var contador = document.getElementById('valorSession')
    if (contSession == 0) {
        contSession = 1
        sessionStorage.setItem("click", contSession)   
    } else {
        contSession++
        sessionStorage.setItem("click", contSession)
    }
    //Estilo
    contador.style.border = "1px solid #000000"
    contador.style.borderRadius = "15px"
    contador.innerText = contSession
}

