/* const nombres = ['pepe', 'juan', 'maria'] */


/* Por cada nombre quiero que aparezca un mensaje por consola que diga 'hola (nombre)' */


/* for(let index = 0; index < nombres.length; index = index + 1 ){
    let nombre = nombres[index]

    console.log('Hola ' + nombre)
} */


/* const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    }
] */

/* Por cada elemento de mi carrito mostrar por consola

Has comprado el producto (producto.nombre) x (producto.cantidad) a un precio unitario de $(producto.undiad)
*/

/* for(let index = 0; index < carrito.length; index = index + 1){
    const producto = carrito[index]
    console.log(producto)

    console.log('Has comprado el producto ' + producto.nombre + ' x ' + producto.cantidad + ' a un precio unitario de ' + producto.precio)
} */


/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'casanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 35
        }
] */

/*
Por cada perosnaje mostrar el siguiente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} anios'

Opcional:
Al finalizar el recorrido mostrar por consola 'total de edades: {sumatoria de las edades de los usuarios}

*/
/* let sumatoriaEdad = 0

for(i = 0; i < personajes.length; i = i + 1){
    const caracteristicas = personajes[i]

    console.log('Hola mi nombre es ' + caracteristicas.nombre + ' ' + caracteristicas.apellido + ' y tengo ' +caracteristicas.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + caracteristicas.edad
}

console.log('la sumatoria de las edades es ' + sumatoriaEdad) */
/* let sumatoriaEdad = 0

for(const personaje of personajes){                           //(Iteracion mas simplificada)
    console.log(personaje)
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' +personaje.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}
console.log('la sumatoria de las edades es ' + sumatoriaEdad)
 */
/* Ir al ejercicio anterior y hacerlo con for of */


/* const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '54543565'
}

let resultado = ''

for(let propiedad in datos){                             //For '' in '' Es para iterar las keys o propiedades de un objeto
    resultado = resultado + '\n<span>' + propiedad + ':</span> ' + '<span>' + datos[propiedad] +'</span>'
    
}

console.log(resultado) */


/* METODOS AVANZADOS de arrays */

const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'casanova',
        edad: 15
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 35
        }
] 

/* for(const perosnaje of personajes){
    console.log('viene el for of', perosnaje)
} */

/* personajes.forEach(function (personaje){
    console.log(personaje)
}) */

/* const personajesMayores = []
for(const personaje of personajes){
    if(personaje.edad >= 18){
        personajesMayores.push(personaje)
    }
}
console.log(personajesMayores) */

/* const personajesMayoresDeEdad = personajes.filter(function(perosnaje){
    return perosnaje.edad >= 18
}) */

/* console.log(personajesMayoresDeEdad) */




/*
le decimos metodo avanzado a un metodo que recibe una callback

Filter es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de la callback es thurty entonces el elemento se agregara al array resultante
Si el valor de retorno de la callback es falsy entonces se ignorara (pasa al siguiente elemento)
SIEMPRE FILTER RETORNARA UN ARRAY
Si el array es vacio significa que nadie paso el filtro

*/

const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'Celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 3,
        precio: 2300
    },
]

/* const productosMenosDe2950 = productos.filter(function(producto){
    return producto.precio <= 2950
})

console.log(productosMenosDe2950)

const productosNoblex = productos.filter(function(producto){
    return (producto.marca.toLowerCase() === 'noblex'.toLowerCase())
})

console.log(productosNoblex)

const productosTv = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes('tv'.toLowerCase()))                                 //Para incluir mayus
})

console.log(productosTv) */


/*
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca Noblex
-Traer los productos que en su nombre incluyan el string tv
*/



/* find es un metodo avanzado que recibe una callback, la callback recibe a el elemento
Si el valor de retorno de la callback es thurty entonces el elemento se agregara al array resultante
Si el valor de retorno de la callback es falsy entonces se ignorara (pasa al siguiente elemento)
FIND puede retornar el elemento o undefined (si no encuentra elelemento)
Si el array es vacio significa que nadie paso el filtro */

/* const tvSamsung = productos.find(function(producto){  //devuelve el primer valor si hay mas de uno
    return producto.nombre === 'tv samsung'
})

console.log(tvSamsung) */


/* MAP
Nos sirve para crear un array en base a otro array
Va a recorrer el array y por cada elemento, la callback va a ejecutarse
El valor de retorno de la callback es el valor del nuevo elemento que se agregara al array resultante
Siempre se espera obtener la misma cantidad de objetos que el array original

RETORNA SIEMPRE UN ARRAY
*/


const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre: 'computadora'
    }
]

const nombresObjetos = ['vaso', 'tornillo', 'computadora']

const arrayInverso = nombresObjetos.map(function(nombre){
    return {nombre: nombre}
})

const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>' + objeto.nombre +'</div>'
})

const resultadoX = objetos.map(function(objeto){
    return 'pepe'
})
console.log(listaDeObjetosHTML)
console.log(arrayInverso)
/* 
[
    '<div>vaso</div>',
    '<div>tornillo</div>',
    '<div>computadora</div>',
]
*/


/* 
TAREA:
.some()   (sirve para  saber si algun elemento cumple con x condicion)
.every()    (sirve para saber si todos los elementos cumplen con x condicion)
.findIndex()   (sirve para buscar el index/indice de x elemento)
*/