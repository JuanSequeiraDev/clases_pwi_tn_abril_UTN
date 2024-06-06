/* Eventos */


function alertar(){
    alert('hola desde un evento click')
}
/* 
const alertar2 = () => {
    alert('hola desde un evento click')
}
 */

/* const sumar = (a,b) => a + b

alert(sumar(8, 8)) */

/* Van a abreviar la funcion en flecha cuando su funcion no haga muchas acciones, o cuando la funcion directamente retorne 

Ejemplo */

/* funcion hacertarea(){
    let tipo = prompt('que tipo de tarea quieres hacer')
    guardarTarea(tipo)
    return tipo
} */

/* const hacerTarea = () =>{
    let tipo = prompt('que tipo de tarea quieres hacer')
    guardarTarea(tipo)
    return tipo
}

const calcularIva = (iva) => iva * 0.21 */

/* funcion calcularIva (iva){
    return iva * 0.21
} */

const validarNumero = (numero) => Boolean(numero) && !isNaN(numero) //Si no hay llaves retorna sin usar return


const solicitarDato = (solicitud) =>{
    let dato = prompt('ingrese un ' + solicitud)
    while(!dato){
        dato = prompt('Error: ingrese un ' + solicitud)
    }
    return dato
}

console.log(validarNumero(8))

/* const generarUsuario = (username, email) => {
    return {username: username, email: email}
} */
// retornar un objeto resumiendo
const generarUsuario = (username, email) => ({username: username, email: email})


const btnClick2 = document.getElementById('btn-especial')     /* Los metodos son funciones a las cuales se accede referenciando con un . sobre el codigo en el que deseamos ejecutarlo */

/* btnClick2.onclick = function(){
    alert('hola desde un evento click')
} */

btnClick2.onclick = alertar



const btn_click_3 = document.getElementById('btn-3')
/* const btn_click_3 = document.querySelector('.btn')  */
                        /*document.querySelectorAll('.btn')[0]
btn_click_3.onclick = alertar
*/

/* const btnClick3 = document.getElementsByClassName('btn')[0] //Al ser formato array son iterables, osea que puede utilizarse el for of

btnClick3.onclick = alertar */

//addEventListener es un metodo para añadir un evento

/* btn_click_3.addEventListener('click', alertar)  */  //Se pasa la funcion en el parametro de la funcion addEventListener como referencia, es decir una callback


//Cuando me hagan click en el boton quiero que por consola se diga click
/* btn_click_3.addEventListener('click', function(){
    console.log('click')
})  */

btn_click_3.addEventListener('click', () => {
    console.log('click')
}) 


const personas = [
    {
        nombre: 'pepe',
        edad: 14
    },
    {
        nombre: 'maria',
        edad: 50
    },
    {
        nombre: 'pedro',
        edad: 30
    },
    {
        nombre: 'sarah',
        edad: 25
    },
]


/* const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18)
console.log(mayoresDeEdad) */

const formularioHTML = document.getElementById('formulario')


const handleSubmit = (evento)=> {    
    evento.preventDefault()
    console.dir(formularioHTML.dato.value)
}

formularioHTML.addEventListener('submit', handleSubmit)       //A esta funcion se le llama Handler, se le añade a la funcion encargada de manejar lo que sucede en el evento


/* console.log('el valor actual del input dato es ' + formularioHTML.dato.value)  */
