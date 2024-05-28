
/* function login(){
    let emailAVerificar = prompt('Ingrese un email', '')
    while(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) === false){
        emailAVerificar = prompt('Ingrese un email valido')
    }
    alert('Email registrado ' + emailAVerificar)
    let password = prompt('ingrese una contraseña: ')
    while(!(password.length >= 6 && password != '' && password != null && /[A-Z]/.test(password))){
        password = prompt('ingrese una contraseña de formato valido')
    }
    alert('Contraseña registrada ' + password)
    return {
        email: emailAVerificar,
        constrasenia: password
    }
}


let emailRegistrado = login()
console.log(emailRegistrado)
 */

//Mi metodo










/* function obtenerEmail() {
    let email = prompt("Bienvenido, por favor ingrese su email: ", 'johndoe@gmail.com')
    while (!validarEmail(email)) {
        email = prompt("Error, por favor ingrese un email valido: ", 'johndoe@gmail.com')
    }
    alert('El email esta registrado: ' + email)
    return email
}
function obtenerPassword() {
    let password = prompt("Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    while (!validarPassword(password)) {
        password = prompt("Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    }
    return password
} */
/* function login() {
    let email = obtenerEmail()
    let password = obtenerPassword()
    return { email: email, password: password}
} */


function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return /[A-Z]/.test(password) && password.length >= 6 && !/\s/.test(password);
}

function obtenerDato(data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}



/* function obtenerDato() {
    let email = obtenerDato(
        {
            mensaje: 'Bienvenido, por favor ingrese email',
            error: 'Error, por favor ingrese un email valido',
            validacion: validarEmail
    }
)
    let password = obtenerDato(
        {
            mensaje: 'ingrese una contrasena de min 6 caracteres y 1 mayuscula' ,
            error: 'error ingrese una contrasena de min 6 caracteres y una mayuscula',
            validacion: validarPassword
        }
)
return { email: email, password: password}
} */

const DATOS = {
    EMAIL: {
        mensaje: 'Bienvenido, por favor ingrese email',
        error: 'Error, por favor ingrese un email valido',
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: 'ingrese una contrasena de min 6 caracteres y 1 mayuscula' ,
        error: 'error ingrese una contrasena de min 6 caracteres y una mayuscula',
        validacion: validarPassword
    },
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}

//console.log(login())


//METODO SIMPLE

//NUMEROS METODO RESUMIDO

function validarOperacion(signo){
    return ( signo == '+' || signo == '-' )
}

function validarNumero(numeroAValidar){
    return (!(!numeroAValidar || isNaN(numeroAValidar)))
}

function obtenerNumero(numero){
    let dato = prompt(numero.mensaje)
    while(!numero.validacion(dato)){
        dato = prompt(numero.error)
    }
    return dato
}

function calculadora(){
    let signo = obtenerNumero (CALCUDATOS.SIGNO)
    let numero1 = obtenerNumero(CALCUDATOS.NUMERO1)
    let numero2 = obtenerNumero(CALCUDATOS.NUMERO2)
    if(signo == '+'){
        resultado = Number(numero1) + Number(numero2)
    }
    else if(signo == '-'){
        resultado = Number(numero1) - Number(numero2)
    }
    alert('El resultado de ' + numero1 + ' ' + signo + ' ' + numero2 + ' es ' + resultado )
    return {signo: signo, numero1: numero1, numero2: numero2, resultado: resultado }
}



const CALCUDATOS = {
    SIGNO: {
        mensaje: 'Ingrese la operacion. + o - unicamente',
        error: 'ERROR: Ingrese la operacion. + o - unicamente.',
        validacion: validarOperacion
    },
    NUMERO1: {
        mensaje: 'Ingrese el primer numero',
            error: 'ERROR: Ingrese el primer numero',
            validacion: validarNumero
    },
    NUMERO2: {
        mensaje: 'Ingrese el segundo numero',
            error: 'ERROR: Ingrese el segundo numero',
            validacion: validarNumero
    },
}

console.log(calculadora())

//Otro metodo

/* function calculadora(){
    
    let signo = obtenerNumero(
        {
            mensaje: 'Ingrese la operacion. + o - unicamente',
            error: 'ERROR: Ingrese la operacion. + o - unicamente.',
            validacion: validarOperacion
        }
    )

    let numero1 = obtenerNumero(
        {
            mensaje: 'Ingrese el primer numero',
            error: 'ERROR: Ingrese el primer numero',
            validacion: validarNumero
        }
    )

    let numero2 = obtenerNumero(
        {
            mensaje: 'Ingrese el segundo numero',
            error: 'ERROR: Ingrese el segundo numero',
            validacion: validarNumero
        }
    )

    if(signo == '+'){
        return(alert(parseFloat(numero1) + parseFloat(numero2))) 
    }else{
        return(parseFloat(numero1) - parseFloat(numero2)) 
    }
    
}

console.log(calculadora()) */

//HISTORIAL