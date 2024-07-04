import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <h2>logo</h2>
            <nav>
                <NavLink to={'/contact'}>Contacto</NavLink> {/* No recarga la pagina como achor */}
                <NavLink to={'/cart'}>Carrito</NavLink>
                <NavLink to={'/detail'}>Detalles</NavLink>
            </nav>
        </header>
    )
}

export default NavBar