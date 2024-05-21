/*
JS es un lenguaje basado en prototipos 
*/

/* 
Prototipo de string
metodos de string
la propiedad length
*/


/* 
Cualquier cosa que se pueda enlistar
arreglos/array, lista/list, coleccion/collection, matriz
*/
/* Los arrays se usan para listar elementos */

/* let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 6 */
        //indice/index:0, 1, 2
/* const notasTrimestre = [9, 10, 6]   */                                                  /* ARRAY */

/* notasTrimestre[1] = 4

console.log('el segundo trimestre te sacaste un: ' + notasTrimestre[1])

console.log(notasTrimestre.length) */
/*
const notas = {
    0: 9,
    1: 10,
    2: 6,
    length: 3
}*/



const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

const elementosEliminados = nombres.splice(nombres.indexOf('maria'), 2, 'carlos', 'jose')
/* Quiero que alex deje de ser alex y sea alexis */

nombres[5] = 'alexis'
console.log(elementosEliminados) //Devuelve los elementos eliminados como un array

//Mala practica
/* delete nombres[5] */
/* nombres[7] = 'ezequiel' */

/* Modifican la array original sin tener que volver a guardar el valor en la variable */

//.pop() => elimina el ultimo elemento
//.shift => elimina el primer elemento
/* nombres.pop() */
/* let eliminado = nombres.shift() */

/* push => agrega al final */
/* unshift => agrega al inicio */
/* nombres.push('leonel') */

/* Quiero que maria deje de ser maria y sea marianela */

//indexOf(searchString) | lastIndexOf() => busca el elemento en el array y si lo encuentra devuelve la posicion, sino devuelve -1 (SOLAMENTE LO USAN LOS ARRAYS DE STRING)
/* let posicionMaria = nombres.indexOf('maria') //En caso que haya 2 'maria' busca el primer elemento con este nombre
nombres[posicionMaria] = 'marianela' */

//splice(posicion, cuantosElementosElimina, nuevo elemento)
/* let posicionDeValentina = nombres.indexOf('valentina')
nombres.splice(posicionDeValentina, 1) */

//eliminar a juan y a maria

//KISS = keep it simple
/* function eliminarNombre(listaDeNombres, nombreAEliminar){
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}

eliminarNombre(nombres, 'juan')
eliminarNombre(nombres, 'maria')


console.log(nombres) */

const carrito = [
    {
        nombre: 'tv samsung',
        precio: 30000
    },
    {
        nombre: 'tv samsung',
        precio: 30000
    },
    {
        nombre: 'tv samsung',
        precio: 30000
    }
]

//callbacks

//JSON = javascript object notation