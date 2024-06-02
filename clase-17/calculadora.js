
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

const DATOS = Object.freeze({
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
})
/* Object freeze evita la modificacion de un objeto */
DATOS.NEW_DATE = 'pepe'

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

/* console.log(calculadora()) */

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

/* historial = [
    {
        accion: 'CALCULAR' ,
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1 
    },
] */

/* function renderizarHistorial(historial){
    const arrayDeElementos = historial.map(function(elemento){
        return 'El historial es:' + '\n' +  'Accion: ' + elemento.accion + '\n' + 'Operacion: ' + elemento.operacion + '\n' + 'Numeros: ' +     elemento.a + ' , ' + elemento.b + '\n' + 'Resultado' + elmento.resultado
    })
    return arrayDeElementos.join('\n')
} */

/* console.log([1, 2 ,3].join('\n')) */

function renderizarHistorial(historialRecibido){  /* {For of} recorre un array */
    let listaStrHistorial = ''
    for(const item of historialRecibido){
        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
    `
    }
    return listaStrHistorial
}

/* console.log(renderizarHistorial(historial)) */

/* Crear una funcion llamada
elementoHistorial =  {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1 
    }
agregarAlHistorial(elmentoHistorial)
Agregar el objeto al array global historial

obtenerHistorial() que va a retornar el historial
*/

extraHistorial =  {
    accion: 'CALCULAR',
    operacion: '-',
    a: 1,
    b: 4,
    resultado: 5 
}

function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial()   //historial previo o []
    historial.push(elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial(){
    const historialLocal = localStorage.getItem('historial')
    return JSON.parse(historialLocal)
}


/* Verificando que un usuario que entra por primera vez tenga un historial */
if(obtenerHistorial() === null){
    /* Si no hay historial se guarda como array vacio */
    localStorage.setItem('historial', JSON.stringify([]))
}

agregarAlHistorial({
    accion: 'CALCULAR',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1 
})

/* console.log(obtenerHistorial()) */
console.log(renderizarHistorial(obtenerHistorial()))
/* 
    Variables globales  

localStorage || sessionStorage 

Metodos para modificarlas:       'funcionan para ambas'

.setItem(key: 'string' , value: 'string')                    guarda/reemplaza un nuevo valor con la llave (key) que reciba

.getItem(key: 'string')                        Permite obtener/retornar el valor asociado a una key. Si la key no existe, devuelve null

.removeItem(key: 'string')                                       Elimina la key y el valor asociado a la key que recibe

.clear()                                                          No recibe ningun dato, limpia el storage por clompeto
*/

/* let datoImportante = 'el mate se toma amargo' */

/* localStorage.setItem('array', {}) */

/* localStorage.setItem('importante', datoImportante) */

/* localStorage.clear()*/

/* JSON = JAVASCRIPT OBJECT NOTATION
JSON es la variable global que usamos para acceder a los metodos .parse(), .stringify()

Las reglas de JSON

Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso estrictamente ""
Si quiero escribir booleanos, null, undefined o numeros los sigo usando como antes
SI ESCRIBEN OBJETOS O ARRAYS la ultima coma no va

{
    "nombre": "pepe",
    "edad": 70, //esta coma da error
}
//Caso Correcto
{
    "nombre": "pepe",
    "edad": 70
}
*/

//Este string es transformable a objeto de JS / JSON
let string = '{"username": "pepe"}' //Este string esta escrito en formato JSON


//Transforma al formato objeto de js
let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto)

//Transforma al formato string de js
/* JSON.stringify() */

let objeto = {
    nombre: 'pepe',
    edad:70
}

const objetoEnString = JSON.stringify(objeto)  // '{"nombre": "pepe", "edad": 70}'
console.log(objetoEnString)   

/* 
Transformar el array historial a string con notacion JSON y mostrarlo por alert

AUTOCORRECION:
La alerta no debe mostrar [object Object]
*/

/* const historialStringify = JSON.stringify(historial) */

/* 
En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo 
pero ademas vamos a guardar el historial en el local storage con la key historial
*/


/* 
La funcion obtener historial debe tomar el historial de localStorage y retornarlo como array
*/