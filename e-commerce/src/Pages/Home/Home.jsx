import React from 'react'
import { NavBar } from '../../Components'
import { Link } from 'react-router-dom'
import { lista_productos } from '../../data'
import { Bs0Circle } from "react-icons/bs";

const Home = () => {

    return (
        <div>
            <NavBar />
            <h1>Lista de productos</h1>
            <div>
                {lista_productos.map(producto => {
                    return (
                        <div key={producto.id}>
                            <h2>{producto.titulo}</h2>
                            <span>Precio: ${producto.precio}</span>
                            <Link to={'/detail/' + producto.id}>Ver detalle <Bs0Circle /></Link>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home


