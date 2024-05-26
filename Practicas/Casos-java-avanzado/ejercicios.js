/* TAREAS:  */

/* 1.
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida" */

/* let url = prompt('inserte una URL')

if(url.toLowerCase().includes('https://'.toLowerCase())){
    alert('la url ingresada, cuenta con certificado ssl')
}
else if(url.toLowerCase().includes('http://'.toLowerCase())){
    alert('la url ingresada no cuenta con certificado ssl')
}
else{
    alert('no has ingresado una url valida')
} */


/* 2.
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo" mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" */



/* let texto1 = "hola%20como%20estas,%20todo%bien?"

let texto2 = "no%20me%20siento%20bien"                           //replaceAll 

let texto3 = "que%20mal"

function decodificadorTexto(textoCodificado){
    let textoDecodificado = textoCodificado.replaceAll('%20', ' ')
    textoDecodificado = textoDecodificado.replaceAll('%', ' ')
    return textoDecodificado
}

function contadorDeCaracteres (stringRecibido)
{
    if (stringRecibido.length <8)
        {
            return "el mensaje es corto"
        }
        else if (stringRecibido.length >=9 && stringRecibido.length <=18)
            {
                return "el mensaje es mediano"
            }
            else if (stringRecibido.length > 18)
                {
                    return "el mensaje es largo"
                }
}

function medidorDeComplejidad(texto){
    if(texto.includes(',')){
        return 'el mensaje es complejo'
    }
    else if(texto.includes('-')){
        return 'el mensaje es complejo'
    }
    else if(texto.includes('@')){
        return 'el mensaje es complejo'
    }
    else{
        return ' el mensaje no es complejo'
    }
}

//Texto1
let texto1Decodificado = decodificadorTexto(texto1)
console.log('el texto decodificado es: ' + texto1Decodificado)

let texto1Longitud = contadorDeCaracteres(texto1Decodificado)
console.log(texto1Longitud)

let texto1Complejidad = medidorDeComplejidad(texto1)
console.log(texto1Complejidad)

//Texto2
let texto2Decodificado = decodificadorTexto(texto2)
console.log('el texto decodificado es: ' + texto2Decodificado)

let texto2Longitud = contadorDeCaracteres(texto2Decodificado)
console.log(texto2Longitud)

let texto2Complejidad = medidorDeComplejidad(texto2)
console.log(texto2Complejidad)

//Texto3
let texto3Decodificado = decodificadorTexto(texto3)
console.log('el texto decodificado es: ' + texto3Decodificado)

let texto3Longitud = contadorDeCaracteres(texto3Decodificado)
console.log(texto3Longitud)

let texto3Complejidad = medidorDeComplejidad(texto3)
console.log(texto3Complejidad) */




/* 3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */



/* function decodificadorTexto(textoCodificado){
    let textoDecodificado = textoCodificado.replaceAll('%20', ' ')
    textoDecodificado = textoDecodificado.replaceAll('%', ' ')
    return textoDecodificado
}

function codificadorTexto(texto){
    let textoCodificado = texto.replaceAll(' ', '%20')
    return textoCodificado
}

let mensajeSocilitado = prompt('ingrese un mensaje: ')
mensajeSocilitadoCodificado = codificadorTexto(mensajeSocilitado)

console.log(mensajeSocilitadoCodificado)

let mensajeSocilitadoDecodificado = decodificadorTexto(mensajeSocilitadoCodificado)

console.log(mensajeSocilitadoDecodificado) */



/* 4.
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"*/

/* let palabra = prompt('ingrese una palabra:')

for(let i = 0; i < palabra.length; i = i + 1){
    
    let letra = palabra[i];

    if(letra === letra.toUpperCase()){
        console.log("Tiene mayuscula")
        break
    }
    else{
        console.log("Tiene minuscula")
        break
    }
} */


/* 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs */



/* function calculadorDeViaje(distancia){
    let resultadoAPie = distancia/5

    let resultadoEnBicicleta = distancia/10

    let resultadoEnAuto = distancia/50

    console.log('Para la distancia ' + distancia + 'km, en bicicleta el tiempo de viaje es ' + resultadoEnBicicleta + 'hora/s, a pie ' + resultadoAPie + 'hora/s y en auto ' + resultadoEnAuto + 'hora/s.')
} */



/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
puedeVerPelicula(12, true)
true
puedeVerPelicula(16, false)
true
puedeVerPelicula(18, true)
true */


/* function puedeVerPelicula(edad, booleano){
    if(edad >= 15 || booleano === true){
        return true
    }
    else if(edad < 15 || booleano === false){
        return false
    }
}

console.log(puedeVerPelicula(12, false))
console.log(puedeVerPelicula(12, true))
console.log(puedeVerPelicula(16, false))
console.log(puedeVerPelicula(18, true))
 */

/* 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
esVocal('n')
false
esVocal('e')
true */

/* function esVocal(letra){
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        return true
    }
    else{
        return false
    }
}

console.log(esVocal('a'))
console.log(esVocal('n'))
console.log(esVocal('e')) */