### Que es javascript?

Es un lenguaje de programacion (sirve para dar ordenes)

JavaScript es un lenguaje interpretado por el motor v8engine por esto, no necesita compilado segun en que web es usada

Es un lenguaje Case Sensitive por lo cual diferencia minusculas de mayusculas

### TIPOS DE DATOS

## Datos objeto: Proximamente

## Datos primitivos:

# Number => Numeros como los conocemos nosotros
EJ:
8
0
-2
3.14 (no es decimal, es flotante(float))
Nan
Infinity

# String => Textos, deben ir entre comillas ('',"",``)
EJ:
'hola mundo'
"pepe"
'8'

# Boolean => valores true o false (si/no)
EJ:
true
false

# Null => Ausencia o nulidad de un dato
EJ:
null

# Undefined => No hay un dato definido
EJ:
undefined



Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que NO quieren recibir la carta

estado_de_respuesta: false


Soy un mensajero que envia una carta, llego a la casa, me atienden y me dicen que quieren recibir la carta

estado_de_respuesta: true


Soy un mensajero que envia una carta, me extravio en el viaje

estado_de_respuesta: undefined


Soy un mensajero que envia una carta, llego a la casa y no me atienden

estado_de_respuesta: null

<!-- 
estado: undefined | mensajero sale de mensajeria
mensajero llega   | estado: varia segun el resultado de la entrega
 -->

### Constructores
# String(dato) | Transforma mi dato a string
# Number(dato) | Transforma mi dato a number
# Boolean(dato)| Transforma mi dato a boolean
EJ:
"hola" + 1
proceso interno: "hola" + String(1)
proceso interno: "hola" + "1"
"hola1"

EJ: Number(undefined) = NaN <!-- NaN = Not a number -->

EJ: Boolean(0) = false

### Operadores aritmetios

## SIEMPRE DEVUELVEN STRINGS
+: concatenacion
La concatenacion ocurre cuando uno de los valores es de tipo de dato STRING


## SIEMPRE DEVUELVEN MODULOS
+: suma
-: resta
*: multiplicacion
/: division
%: resto de la division o modulo

# EJ:
1 + true
proceso interno: 1 + number(true)  <!-- True siempre valdra 1 -->
proceso interno: 1 + 1 = 2
# EJ:
Number("3") puede transformar al 3 en un numero ya que es un "string con valor numerico"

<!-- Las sumas o restas entre flotantes dan numeros no exactos respecto al concepto normal de suma o resta y con toFixed se pueden arreglar a la cantidad de decimales deseadas -->

## Falsy o Truthy

# Valores falsos
Valores considerados false en tipo de dato booleano sin ser necesariamente false
EJ:
-0
0
"" (vacias)
null
undefined
NaN

# Valores verdaderos
Siguen el mismo concepto, son tantos que no es necesario memorizar o intentar enumerar
EJ:
1
"Hola"
10
true
"true"

## Comparadores
Siempre devuelven booleanos

==: es igual
===: estricta igualdad
!=: diferencia
!==: estricta diferencia
>: mayor          <!-- Valores de la tabla ascii al usar letras-->
<: menor          
>=
<=

<!-- NaN no puede ser comparado con ningun otro dato -->

Van a escribir el tipo de dato y el resultado

5 + null

3 + 0

4 - '8'

'pepe + ''

NaN + ''

true === 1

Ej: 

'' == false boolean true

1 !== false boolean true