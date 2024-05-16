/* 
    Quiero un programa que dado un nombre muestre una alerta con el nombre 300 veces(300 alertas en total)
*/



//DRY = DONT REPEAT YOURSELF

/* let nombre = "pepe" */

//FOR se usa cuando queremos repetir algo x cantidad de veces

/* 

'pepe'
'hola como estas?' => ['hola', 'como', 'estas']

SINTAXIS:
for(let iterador = valor_inicial; limite (mientras mi iterador sea menor o igual a 3) <= 3; actualizacion )
*/
/* 
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log('me ejecuto')
} */


/* 
Mostrar por alerta el conteo del 1 al 10 (se deben ejecutar 10 alertas)
*/

/* for(let i = 1; i <= 10; i = i + 1 ){
    alert(i)
} */



/* 
Solicitar al usuario un numero tres veces, mostrar al final de las solicitudes una alerta que muestre la sumatoria de los 3 numeros
*/


/* let sumatoria = 0   //Acumulador: variable global de valor neutro
let cantidad_de_repeticion = prompt('ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('Error, dato no valido, vuelva a ingresar el numero: ')
}

for(let i = 1; i <= 3; i = i +1){
    let numero = prompt("ingresa un numero")
    while(!numero || isNaN(numero)){
        numero = prompt('Error, dato no valido, vuelva a ingresar el numero: ')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert('resultado: ' + sumatoria) */






/*                                                                TAREA
Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre

Si la cantidad de personas de la clase es 5, solicitar 5 nombre

Luego de solicitar los nombres mostrarlos en este formato

*lista de alumnos:
-juan
-pepe
-maria
-jose
-carla
*/

/* SALTO DE LINEA  || \n  :  alert("lista:  \n-pepe)\n-juan" */

