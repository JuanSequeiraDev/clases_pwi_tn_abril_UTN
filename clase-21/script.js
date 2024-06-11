/* const formLoginHTML = document.getElementById('form-login') */

const formRegisterHTML = document.getElementById('form-register')

//Quiero llamar al input username

/* console.log(formLoginHTML.username.value) */


/* formLoginHTML.addEventListener('submit', (event) =>{
event.preventDefault()
console.log('se envio el formulario')
//console.log(formLoginHTML.username.value)
const formulario = event.target
console.log(formulario.username.value)
}) */

/* const handleLogin = (event) => {
    event.preventDefault()
    console.log('se envio el formulario')
    const formulario = event.target
    const username = formulario.username.value
    if(username.length < 4){
        const errorTextHTML = document.getElementById('error-text-username')
        errorTextHTML.innerText = 'El username debe tener 4 caracteres'
        //errorTextHTML.style.color = 'red'
    }
}

formLoginHTML.addEventListener('submit', handleLogin)

formRegisterHTML.addEventListener('submit', handleLogin) */

/* SI EL USERNAME TIENE MENOS DE 4 CARACTERES mostrar un texto de error que diga 'El username debe tener 4 caracteres' */
/* 
username tiene que tener una mayuscula, y un '-' y al menos cuatro caracteres
password tiene que tener una mayuscula y un '#'
email debe ser email (usar la expresion regular)
Si el error es multiple EJEMPLO, el username y el password estan mal tirara 2 textos, es decir cada input tendra su posibilidad de fallar
Si esta todo bien por consola diran 'exito'
*/

/* const handleLogin = (event) =>{
    event.preventDefault()
    const formulario = event.target
    console.log(formulario)
} */

/* const validarUsername = (username) =>{
    if(username.length < 4 && !/(?=.*?[A-Z])/ && username.includes('-')){

    }
}
 */

const formLoginHTML = document.getElementById('form-login')

const validarUsername = (username) => {
    return /[A-Z]/.test(username) && /-/.test(username) && username.length >= 4;
};

const validarPassword = (password) => {
    return /[A-Z]/.test(password) && /#/.test(password) && password.length >= 4;
};

const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

formLoginHTML.addEventListener('submit', (event) =>{
    event.preventDefault()
    const formulario = event.target
    const username = formulario.username.value
    const password = formulario.password.value
    const email = formulario.email.value
    if(!validarUsername(username)){
        const errorUsername = document.getElementById('error-text-username')
        errorUsername.innerText = 'Formato de username incorrecto'
    }
    if(!validarPassword(password)){
        const errorPassword = document.getElementById('error-text-password')
        errorPassword.innerText = 'Formato de password incorrecto'
    }
    if(!validarEmail(email)){
        const errorEmail = document.getElementById('error-text-email')
        errorEmail.innerText = 'Formato de email incorrecto'
    }
    if(validarEmail(email) && validarUsername(username) && validarPassword(password)){
        console.log('exito')
    }
})


//Metodo mas avanzado:









/* TAREA
Hacer un formulario para productos

VALIDAR

Titulo: string con mas de 6 caracteres
Precio: Numero valido
Descripcion (textarea): string con mas de 100 caracteres
Stock: numero valido
Codigo: string pero que tenga un # por delante  EJ: #aj504/ #pepe/ #2135

Con mensajes de error propios
*/







/* camara.addEventListener('entrar', (evento) =>{
        El evento recibido es un objeto de informacion:
    Quien entro
    a que hora
    sexo
    color_pelo
}) */

