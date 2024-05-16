/* FUNCIONES */

/* function sumar2Mas2(){
    console.log('el resultado de la suma es: ' + (2 + 2))
} */


//Invocacion o llamada de la funcion
/* sumar2Mas2()
sumar2Mas2()
sumar2Mas2() */

/* function sumar(a, b){
    return a + b   // Se suele usar return para hacer la funcion agnostica y abstracta, ya que se puede usar no importa como se la llame o invoque
}

console.log('el resultado de mi suma es: ' + sumar(9, 8))
alert('el resultado de mi suma es: ' + sumar(1, 1)) */


/*
calcularIva(precio) => el valor del iva
calcularIva(100) => 21
*/
//SOLUCION
/* function calcularIva(a){
    return a * 0.21
}

console.log(calcularIva(100)) */




/* 
calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
*/
//SOLUCION
/* function calcularMinutos(a){
    return a * 60
}

console.log(calcularMinutos(5)) */



/* 
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero
*/


/* function validateNumber(){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        prompt('ERROR, dato no valido, vuelva a ingresar el numero')
    }
    numero = Number(numero)
    return numero
}
 */


/* 
String:

(property)string.length = longitud del string
Ej: 'pepe'.length = 4

(method) string.toLowerCase() = pasa a minuscula
(method) string.toUpperCase() = pasa a mayuscula
(method) string.trim() = eliminar espacios
(method) string.includes(string_buscado) = verificar si el string buscado esta dentro del string (Retorna un boolean)
(method) string.replaceAll(string_a_reemplazar, valor_nuevo)
(method) string.repeat(string_a_repetir)
*/

/* let contra = 'pepe123'
contra = contra.toUpperCase()
console.log(contra) */
