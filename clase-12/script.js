/* OPERADORES LOGICOS */

/* 
!: NOT o negacion

nos da el valor booleano opuesto al dato que estoy negando
*/



/* 
||: OR o O

Seleccionar
Si el primer valor es un valor falsy, va a seleccionar el segundo valor
Si el primer valor es un valor verdadero, va a seleccionar el segundo valor

Analiza de izquierda a derecha, devuelve el primer valor verdadero(de no haberlo devuelve el ultimo valor)

EJ:

console.log('' || 0 || null) */



/*
&: SHIFT + 7
&&: AND o Y logico

Evalua si el primer valor es un truly o un falsy
    -Si es false:
        Devuelve el primer valor
    -Si es true:
        Devuelve el segundo valor

EJ:
console.log(0 && 3)
console.log(true && 7) 
*/

/* var estado = true

estado && console.log('llego el mensaje') */

/* console.log(1 && 1 && 'pepe') */




/* 4 && false || 'pepe'   string 'pepe'

8 == 8 || 1 === '1'       Boolean true

(null === NaN) || Boolean(NaN)    false

isNaN('pepe')   true

Number('1') === Number(1) && Number('pepe' + 1)
true && Number('pepe' + 1)    NaN
 */


/* 
Tablas de la verdad

AND:
true && true = true
true && false = false
false && true = false
false && false = false

OR:
true || true = true
true || false = true
false || true = true
false || false = false

*/



/* Variables:
Es un espacio reservado que almacena un dato (referencia), este debe tener un identificador el cual usaremos para obtener el dato
*/


/* Javascript es un lenguaje debilmente tipado y de tipado dinamico
Debilmente tipado: No necesito especificar que tipo de dato es mi variable
Tipado Dinamico: Puede variar una variable de tipo de dato 
*/


//subproceso / implicito
/* var nombre  *///esto es implicito (el valor de nombre es llevado arriba del todo donde aun no fue definido)


/* 
Declaracion: Es cuando creamos nuestra variable

<tipo variable> identificador = data
var nombre = pepe
Ejemplo:
var edad =>estoy declarando la variable con el identificador edad

Hoisting: Es la capacidad de una variable de ser llamada antes de su declaracion


EcmaScript (ES5) vs ES6

CONST (ES6+) 
Tiene hoisting? No tiene 
Se puede reasignar? No se puede
Se puede redeclarar? No se puede redeclarar en el mismo bloque
Valor implicito en undefined? No tiene

VAR (ES5)
Tiene hoisting? Si, tiene
Se puede reasignar? Se puede
Se puede redeclarar? Se puede (Prevalece el ultimo en vista de cascada)
Valor implicito en undefined? Si, tiene
El alcance de VAR es siempre global

LET (ES6+)
Tiene hoisting? No tiene
Se puede reasignar? Se puede
Se puede redeclarar? No se puede redeclarar en el mismo bloque
Valor implicito en undefined? Si, tiene
El alcance de LET es siempre local

*/

//EJEMPLO CON VAR\

// var nombre_1 = 'maria'

// {
//     /* pepe */
//     var nombre_2 = 'pepe'
//     {
//         var nombre_3 = 'juan'
//         /* juan */
//     }
// }

// console.log(nombre_1)
// console.log(nombre_2)
// console.log(nombre_3)



//EJEMPLO CON LET

/* let nombre = 'maria'
console.log(nombre)
{
    let nombre = 'pepe'
    console.log(nombre)
    {
        nombre = 'juan'
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre)
 */
/* 
pepe
juan
pepe
maria
*/

/* Var no entiende la diferencia entre dentro y fuera del bloque (let si lo hace, lo cual define un valor dentro y otro valor fuera del bloque para una misma variable)*/
/* let no reconoce el valor de una variable dentro de un bloque si esta es llamada fuera del mismo, si funciona si la variable es llamada desde un alcance local y es definida en un alcance global*/

console.log(PI)

const PI = 3.14

/* nombre = 'juan' */