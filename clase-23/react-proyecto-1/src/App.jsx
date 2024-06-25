import react from 'react'
import {PI, doSomething} from './funciones'
import { Carrito } from './components/carrito/carrito'
import { Item } from './components/carritoitem/carritoItem'


console.log(PI)
/* doSomething() */

const App = () => {
    return (
        <>
            {/* <h1>hola desde HTML</h1>
        <ProductCard />
        <ProductCard />
      <ProductCard /> */}
            <Carrito />
        </>
    )
}

const ProductCard = () => {
    return (
        <>{/* Esto es un fragmento, sirve para evitar crear un elemento padre y es la unica forma de crear elementos de la misma jerarquia sin un padre en comun */}
            <div>
                <h3>titulo producto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, id error in illum tempore natus magnam enim praesentium eum vel voluptatum, officia corporis quae laborum perspiciatis voluptates eaque quod! Autem.</p>
                <span>precio $value</span>
                <button>Comprar</button>
            </div>
            <div>
                <button>like</button>
                <button>dislike</button>
            </div>
        </>
    )
}

export default App


{/* 
Crear un componente llamado Carrito

El componente carrito tendra un h1 que dira 'Carrito de compras'

Luego crear otro componente llamado Item
El componente Item tendra la sig estructura
<div>
    <h2>nombre producto</h2>
    <span>Cantidad: x</span>
    <button>Eliminar</button>
</div>

Mostrar el Carrito en el componente App
*/}

/* const ContactPage = () => {
    return(
            <h1>Formulario de contacto</h1>
            <ContactForm/>
    )
}
*/

/* Queremos que h1 y ContactForm tengan un padre contenedor en comun, por ejemplo un <section>, <main>, <div>, etc? */



/* Si la respuesta es SI */

/* const ContactPage = () => {
    return(
        <main>
            <h1>Formulario de contacto</h1>
            <ContactForm/>
        </main>
    )
} 
*/



/* Si la respuesta es NO */

const ContactPage = () => {
    return(
        <>
            <h1>Formulario de contacto</h1>
            <ContactForm/>
        </>
    )
} 

const Pages = () => {
    return(
        <section>
            <ContactPage/>
        </section>
    )
}
/* el html resultante de pages es:

<section>
    <h1></h1>
    <form></form>
</section>

*/


/* En caso de una lista (para que no tenga muchos padres innecesarios) */
const ListItem = () => {
    return(
        <li>
            {/* Pone el codigo que vos quieras */}
            <h2></h2>
            <ContactPage/>
        </li>
    )
}