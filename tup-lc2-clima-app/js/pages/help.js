// datos mails
const publicKey = 'yqLdi0n7cJmYN18Rg'; 
const contactService = 'default_service'
const contactForm = 'template_s0wu1uu';

// Carteles de status para en mail
const successEmail = '<div class="status exito"><span id="bold">Email</span> enviado exitosamente</div>';
const errorEmail = '<div class="status error">Ingrese un <span id="bold">Email</span> válido</div>';
const errorEmailApi = '<div class="status error">Algo fallo en el envío, por favor intente mas tarde</div>';
const errorInputs = '<div class="status error">Debe completar todos los campos</div>';

// Elementos DOM
const statusEmail = document.getElementById('statusEmail');
const emailValue = document.getElementById('email');
const nameValue = document.getElementById('nombre');
const messaje = document.getElementById('messaje');
const form = document.getElementById('contact-form'); //formulario

emailjs.init(publicKey);

window.onload = function() {
    form.addEventListener('submit', function(event) {
        
        statusEmail.innerHTML = loader;                
        
        if (validarEmail(emailValue.value) && nameValue.value != "" && messaje.value != "") {  /*Si no hay campos vacios, y el mail esta validado, manda el mail */
            event.preventDefault();
            emailjs.sendForm(contactService, contactForm, this)            
            .then(function() {
                statusEmail.innerHTML = successEmail; /* Todo salio bien -> un cartel informando la situacion */
            }, function(error) {
                statusEmail.innerHTML = errorEmailApi;    /* Fallo en el envio -> muestra un cartel informando*/
            });
        }else{
            if (nameValue.value == "" || messaje.value == "") {
                statusEmail.innerHTML = errorInputs;               /* Campos incompletos -> muestra un cartelito*/
            }else{
                statusEmail.innerHTML = errorEmail;            /* Email ingresado invalido -> muestra un cartelito*/
            }
        } 
    });}

function validarEmail(email) {
    var re = /\+@\S+\.\S+/;
    return re.test(email);    
    }
