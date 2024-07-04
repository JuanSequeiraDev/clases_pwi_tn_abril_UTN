import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_productos } from '../../data'

const Detail = () => {
    
    const {productId} = useParams() /* Guarda los valores variables de las url de las routes que se utilizan */
    console.log(productId)

    const producto = lista_productos.find(producto => producto.id == productId)
    console.log(producto)

    return (
        <div>
            <h2>{producto.titulo} <span>#{producto.id}</span></h2>
            <h3>Precio: ${producto.precio}</h3>
            <button>Comprar</button>
        </div>
    )
}

export default Detail