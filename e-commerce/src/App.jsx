import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Detail, Home } from './Pages'



function App() {
  /* console.log(window.navigator.userAgent) */
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Path determina que ruta se utiliza y element que componente se renderizara en esta ruta */}
        <Route path='/detail/:productId' element={<Detail />} /> {/* Al copia /detail en localhost dentro de la web se cambia de ruta */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App

