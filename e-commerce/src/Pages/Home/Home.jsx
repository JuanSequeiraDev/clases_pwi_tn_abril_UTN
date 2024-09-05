import React, { useEffect, useState } from 'react'
import { NavBar } from '../../Components'
import { Link } from 'react-router-dom'
import { lista_productos } from '../../data'
import { Bs0Circle } from "react-icons/bs";
import { obtenerProductos } from '../../fetching/products.fetching';
import './Home.css'


const Home = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
    const [searchString, setSearchString] = useState('')

    const handleChangeValue = (e) =>{
        console.log(e.target.value)
        setSearchString(e.target.value)
    }
    
    const [isWritting, setIsWritting] = useState(false)

    const handleChangeFocus = () =>{
        setIsWritting(true)
    }

    useEffect(
        () =>{
            /* Aca va la funcionalidad que queremos controlar */
            setTimeout( /* Emulando una carga de productos mas lenta (no es necesario en lo absoluto) */
                () => {
                    obtenerProductos().then(
                        (productos) =>{
                            console.log('productos' , productos) /* La callback de then recibe el retorno de una funcion asincronica*/
                            if(searchString){
                                const nuevaListaProductos = productos.filter(
                                    producto => 
                                        producto.titulo.toLowerCase().includes(searchString.toLowerCase())
                            )
                            setListaProductos(nuevaListaProductos)
                            }
                            else{
                                setListaProductos(productos)
                            }
                            setIsLoading(false)
                        }
                    )
                },
                500
            )
            
        },
        [searchString] /* Array vacio en un efecto significa que solo se va a cargar una vez */
    )
    
    

    const handleBlurFocus = () =>{
        setIsWritting(false)
    }
    /*  .catch((error) =>{
        console.log('hubo un error al llamar a la informacion')
    }) */
    
    /* Revisar el status (200 es correcto) */
    /* Si esta en una carpeta que no sea public hay que incluir la ruta de la carpeta */

    return (
        <div>
            <NavBar />
            <h1>Lista de productos</h1>
            {isWritting && <h2>Escribiendo...</h2>}
            <input
            placeholder='buscar producto' 
            onChange={handleChangeValue} 
            value={searchString} 
            onFocus={handleChangeFocus}
            onBlur={handleBlurFocus}
            /> {/* Para controlar el input el valor es el valor del estado */}
            {searchString !='' ? <h2>Escribiendo</h2> : <h2>Esperando cambios</h2>}
            <div>
                {
                    isLoading
                    ?<div className="loading-container">
                        <div className="loading-progress"></div>
                    </div>
                    :listaProductos.map(producto => {
                        return (
                            <div key={producto.id}>
                                <h2>{producto.titulo}</h2>
                                <span>Precio: ${producto.precio}</span>
                                <Link to={'/detail/' + producto.id}>Ver detalle <Bs0Circle /></Link>
                                <hr />
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Home


