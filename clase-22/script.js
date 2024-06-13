//CODIGO SINCRONICO

/* console.log('hola')

console.log('chau')

prompt(alert()) */


/* CALLSTACK : PILA DE LLAMADAS */

/* 
El primero en entrar es el ultimo en salir

Primero se resuelve la alerta
luego se resuelve el prompt
*/



//CODIGO ASINCRONICO

/* Fetch */ 
/* CONSULTA HTTP */                                                    /* DNS = Domain Name Server */
/* Las consultas HTTP tienen METODOS:
GET
POST
PUT
DELETE
*/


/* Entro a mercadolibre

Emito una consulta HTTP de tipo GET a la ip de mercadolibre

RESPONSE(status:200): INDEX.HTML
2xx = todo esta bien
4xx = Errores del lado del frontend
5xx = Errores del lado del backend

*/

/* GET http://miServidor.com/productos */
/* 
Responde con JSON:
{
    Productos:[]
}
*/

/* const URL_API = 'https://jsonplaceholder.typicode.com' */


const obtenerUsuarios = async () =>{
const response = await fetch(URL_API + '/users', {
    method: 'GET'
})
/* if(response.status == 200){
    console.log('todo salio bien')
} */
const data = await response.json()             //JSON tambien es una funcion asincronica
console.log(data)
console.log('Esta es la respuesta:' , response) //Se ejecuta el fetch como pendiente 
console.log('resuelto')
}

/* const obtenerPosts = async () =>{
    const response = await fetch(URL_API + '/posts', {          //Para usar await la funcion debe ser sincronica
        method: 'GET'
    })
    
    console.log(response)                                       //Se ejecuta el fetch como pendiente 
    console.log('resuelto')
    } */

/* obtenerUsuarios() */
/* obtenerPosts() */
/* 
Callstack:

console.log(pending) | fetch()

*/

/* 
Si fetchean a esta direccions: https://jsonplaceholder.typicode.com/users/1 , obtendran el detalle de un solo usuario
El usuario tendra este formato
"id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Mostrar en HTML dentro de un <div>

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}

Si no se cargo el fetch debera mostrar un h2 que diga cargando...
*/





/* const divUserHTML = document.getElementById('user-info')

const obtenerUsuario1 = async () =>{
    const response = await fetch(URL_API + '/users/1', {
        method: 'GET'
    })
    const data = await response.json() 
    
    divUserHTML.innerHTML =`
        <h2>${data.name}</h2>
        <br>
        <span>phone: ${data.phone}</span>
        <br>
        <span>phone: ${data.email}</span>
    `   
    
}

obtenerUsuario1() */




//METODO AVANZADO

const URL_API = 'https://jsonplaceholder.typicode.com'

/* const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
} */

const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}

const renderizarUsuario = async ( valorBusqueda, buscarUsuarioCallback ) => {
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    const user = await buscarUsuarioCallback(valorBusqueda)

    userInfoHTML.innerHTML = `
    <h2>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}

renderizarUsuario(1, buscarUserPorId)




//METODO SENCILLO

/* const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}

const obtenerUsuarioPorId = async (id) =>{
    const divUserInfoHTML = document.getElementById('user-info')

    divUserInfoHTML.innerHTML = `
    <h2>Cargando...</h2>
    `

    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await buscarUserPorId(id) //Si se quiere obtener el retorno de una funcion asincronica se debe usar await

    renderizarUsuario(user)   
} */

/* const renderizarUsuario = (user) =>{
    const divUserInfoHTML = document.getElementById('user-info')
    divUserInfoHTML.innerHTML =`
        <h2>Nombre: ${user.name}</h2>
        <br>
        <span>phone: ${user.phone}</span>
        <br>
        <span>phone: ${user.email}</span>
    `
} */

/* obtenerUsuarioPorId(1)  */



/* divUserHTML.innerHTML =`
<h2>${data.name}</h2>
<span>phone: ${data.phone}</span>
<span>phone: ${data.email}</span>
` */
