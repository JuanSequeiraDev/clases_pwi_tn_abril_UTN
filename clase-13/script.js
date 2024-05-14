/* 
Anotaciones:
Si una funcion no retorna nada, por defecto retorna undefined

Funciones Nativas:
-isNaN(dato) es una funcion que recibe un dato y devuelve un boolean que indica si es o no un NaN

-alert("string") es una funcion que recibe un string y lo muestra en un pop up en la pagina, no tiene devolucion
-typeof(dato) nos dice que tipo de dato es

-prompt() es una funcion que recibe un mensaje y devuelve el valor ingresado por el usuario(como string) o null en caso que el usuario de al boton de cancelar

-parseInt()      dado un dato lo trasnforma a su valor numerico (trunca el decimal o lo corta) y si no puede transformar devuelve un NaN  (No recomendado en mayoria de los casos)

-parseFloat()    dado un dato lo transforma a su valor numerico (si es flotante tambien) y si no puede transformar devuelve NaN(Mejor usar Number)
*/

/* alert('hola desde una alerta') */
/* let variable = alert('pepe') Devuelve undefined
alert('El valor de retorno de alert es: ' + variable) */

/* let dato = prompt('dime tu edad')
dato = Number(dato)
alert(dato) */
/* alert("el valor ingresado es: hola" +dato) */


/*  IF  */

/* let edad = prompt('ingrese su edad') */

/* 
if(edad >= 18){
    alert('podes pasar')
}
else{
    alert('no podes pasar')
}
 */



/* 
sintaxis:

if(condicion){
    bloque de codigo
}
else{

}
*/


/* El dato no debe ser null o '' */
/*
CASO SIN MEJORA:

let dato = prompt('dime algo')

if(dato === null || dato === ''){
    alert('ERROR: DATO NO VALIDO')
}
else{
    alert(dato)
} */


//CASO MEJORADO
/* let dato = prompt('dime algo')

if(dato){
    alert('todo esta bien')
}
else{
    
    alert('ERROR: DATO NO VALIDO')
} */


/* Si el puntaje da entre 0 y 1000 diremos 'principiante'
Si el puntaje da entre 1000 y 3000 diremos 'avanzado/a'
Si el puntaje da mayor 3000 diremos 'experimentado/a'
*/

/* let puntos = prompt('ingresa tus puntos')

if(puntos >= 0 && puntos <= 1000){
    alert('principiante')
}
else if(puntos > 1000 && puntos <= 3000){
    alert('avanzado/a')
}
else if(puntos >= 3000){
    alert('experimentado/a')
}
else{
    alert('ERROR: dato no valido')
} */

/* Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta. 

let tienehijos = true

alert('si tiene hijos')


Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta. 

let salario = prompt('salario actual')

{
    alert('Tu salario anual es de: $' + salario * 12  )
} 

Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta.

let edad = prompt('escribe tu edad')

if(edad >= 18){
    alert('Eres mayor de edad')
}
else{
    alert('Eres menor de edad')
}  */

/* De un empleado se sabe su sueldo y sus anios de antiguedad y el area de contabilidad solicita hacer una renovacion seguno estos criterios:

si su sueldo es inferior a 500 y antiguedad de 10 anios darle un aumento del 20%

si su sueldo es inferior a 500 pero su antiguedad menor a 10 anios aumentar 5%

si el sueldo es mayor o igual a 500 mostrar el sueldo en la pagina mediante una alerta*/

/* let salario = 450
let anios_antiguedad = 5

if(salario < 500 && anios_antiguedad >=10){
    alert (salario * 1.2)
}
else if(salario < 500 && anios_antiguedad < 10){
    alert(salario * 1.05)
}
else{
    alert('$' + salario)
}
*/

/* FORMA DE MATI */
/* let salario = 250
let anios_antiguedad = 12

if(salario < 500){
    if(anios_antiguedad >= 10){
        alert(salario * 1.2)
    }
    else{
        alert(salario * 1.05)
    }
}
else{
    alert('$' + salario)
} */