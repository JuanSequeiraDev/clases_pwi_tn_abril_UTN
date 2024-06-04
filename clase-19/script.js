/*
Document es una variable global de JS que representa como objeto a nuestro HTML
*/

console.dir(document) //dir es una variante de console log que muestra al objeto en su formato original y completo

//DOM = document object model


//metodo que nos permite tener un elemento por su ID
const titulo = document.getElementById('titulo') //es un HTMLElement
const subtitulo = document.getElementById('subtitulo')
console.dir(titulo)
console.dir(subtitulo)

titulo.innerText = 'pepe' 


const caja = document.getElementById('producto')

const producto = {
    precio: 1000,
    nombre: 'tv samsung',
    descripcion: 'lorem ipsum'
}


caja.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <input value='${producto.precio}'>
        <button>comprar</button>
    </div>
` 

/* const buttonProduct = document.createElement('button')        //Rebuscado, no recomendado pero a veces utilizado
buttonProduct.innerText('comprar')
console.log(buttonProduct)


caja.appendChild(buttonProduct) */
// innerHTML | Modifica el html interno de un elemento

const usuario = document.getElementById('user')

const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av_siempre_viva',
    email: 'pepe@gmail.com'
}

usuario.innerHTML =`
    <h2>Nombre:${user.username}</h2>
    <span>Contraseña:${user.password}</span> <br>
    <input type="text" value=${user.adress}> <br>
    <input type="email" value=${user.email}>
`


/* 
generar a partir del usuario el sig HTML

h2 username
span password
addres input (y el valor debe ser la direccion)
span input (y el valor debe ser el email)
*/

const products = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum',
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
]

/* const productsContainerHTML = document.getElementById('products-container')

let productsList = ''

for(const producto of products){

    productsList = productsList + `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <span>Precio: $${producto.precio}</span>
    <div>
        <input value='${producto.precio}'>
        <button>comprar</button>
    </div>
    `
}

productsContainerHTML.innerHTML = productsList */

const listaHistorialHTML = document.querySelector('#lista-historial') //Selector de clase de CSS (para llamar una clase en CSS se utiliza  '.clase' si se quiere llamar a un ID por querySelector se utiliza '#ID')

let itemHistorial = ''

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },    
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    },
]

for(const item of historial){

    itemHistorial = itemHistorial + `
    <div class='historial-item'>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
        
    </div>
    `
}

listaHistorialHTML.innerHTML = itemHistorial


const historialItemHTML = document.getElementsByClassName('historial-item')

/* 
const historialItemHTML = document.querySelectorAll('.historial-item')           //No recomendable      
*/

/* 
console.log(historialItemHTML)

for(const item of historialItemHTML){
    const btn = document.createElement('button')
    btn.innerText = 'ver publicacion'
    item.appendChild(btn)
} 

*/


const input = document.getElementById('input')

//accedo al valor de imput
console.log(input.value)

//Añado la class rojo al elemento input
/* input.classList.add('rojo') */

//Remueve una clase
/* input.classList.remove('input') */

//hacer un interruptor de clase (si esta la clase la eliminamos y si no esta la agregamos)
input.classList.toggle('mostrar')


/* input.classList.replace('mostrar', 'ocultar') */

//Alternar entre clases
/* if(input.classList.value.split(' ').includes('mostrar')){
    input.classList.replace('mostrar', 'ocultar')
}
else{
    input.classList.replace('ocultar', 'mostrar')
} */

//accedo al objeto de lista de clases de input
/* console.log(input.classList) */

const modalHTML = document.querySelector('.modal-container')
const btnOpenHTML = document.getElementById('btn-open')

btnOpenHTML.onclick = function (){
    modalHTML.classList.toggle('ocultar')
}
