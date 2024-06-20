### CALCULADORA

Funcionalidades:

CALCULADORA:
-tener soporte para las siguientes operaciones: +, -
    - '+'
    - '-'

operacionesValidas = ['+', '-']

solicitar una operacion=
La poreacion es valida si es alguna de las operaciones validas
Vamos a solicitar un numero 1:
validar que sea un numero
Vamos a solicitar un numero 2:
validar que sea un numero


En caso de elegir una '+'
sumamos
Mostrar el resultado de {numero1} {+} {numero2} es {resultado}

En caso de elegir una '-'
restamos
Mostrar el resultado de {numero1} {-} {numero2} es {resultado}



HISTORIAL:
-historial 

LOGIN:
-crear usuario (esta se ejecuta al entrar a la calculadora)
    -email => debe estar validado


Utilidades:
-validacion (elegir o suma o resta)
-opcion de cancelar

INGRESO DE DATOS:
-prompt

EGRESO DE DATOS:
-alert



LOGIN:

Prompt que va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / Expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar)
En caso que no volvera a solicitar
En caso de que si sea valido dira email registrado (alert)

Una vez solicitado el email vamos a solicitar password
Validaremos que tenga una letra en mayuscula, que no sea null o '' y que tenga al menos 6 caracteres
en caso que no cumpla volver a solicitar
en caso que si sea valido dira password registrada {password}

Reglas:
Todo el logeo debe estar dentro de una funcion
login(){   debe retornar un objeto usuario
    email: value,
    password: value
} 

HISTORIAL:

El historial debera tener el siguiente formato

Dado el siguiente array
historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]


Crear una funcion llamada: renderizarHistorial(historial)

La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

'
El historial es:

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}

Accion: CALCULAR
operacion: {operacion}
numeros: {a}, {b}
resultado: {resultado}
'
Luego mostar el string resultante por alerta

Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
Ejemplo:
'El historial es:\n-hola' 
se vera como:
El historial es
-hola

o con template string:
`
El historial es
-hola
`
se vera como:
El historial es
-hola