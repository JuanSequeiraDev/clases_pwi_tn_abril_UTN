/* OBJETOS */

/* let edadUsuario = 90
let nombreUsuario = 'pepe'
let dineroUsuario = 7000

/* Modelo Key Value */
/* let usuario = {
    edad: 90,
    nombre: 'pepe',
    dinero: 7000
}

alert(usuario.dinero) */

/* Crear un objeto llamado producto que tenga
precio, nombre, descripcion y marca
*/

/* let producto = {
    precio: 500,
    nombre: 'leche',
    descripcion: 'Leche de vaca descremada',
    marca: 'la serenisima'
} */

/* Crear un objeto llamado persona que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que tenga nombre y edad */

/* let persona = {
    nombre: 'roman',
    edad: 19,
    mejorAmigo: {
        nombre: 'fernando',
        edad: 18
    }
} */

//Para objetos usar constante, permite cambiar el valor de una propiedad dentro de un objeto
/* const auto = {nombre: 'honda civic ex', precio: 6000} 

auto.precio = 7000
auto.anio = 2001

console.log(auto.precio)
 */
/* 
holamellamomati

camelCase = holaMeLlamoMati

snake_case = hola_me_llamo_mati

Español las funciones las hago con snake_case y la variables con camelCase
Ingles las funciones con camelCase y las variables con snake_case

solicitarYGuardar (Dos mayusculas juntas) // solicitar_y_guardar
requestAndSave    (No se juntan las mayusculas)
*/

/* Cambiar el nombre de mejorAmigo a 'pepe'
y crear la propiedad nroCelular a personaje */

const persona = {
    nombre: 'roman',
    'nombre completo': 'pepe suarez',
    edad: 19,
    mejorAmigo: {
        nombre: 'fernando',
        edad: 18,
    }
}

persona.mejorAmigo.nombre = 'pepe'
persona.nroCelular = 15-3948-3289

console.log(persona['nombre completo']) //como acceder a un valor que esta en forma de string
