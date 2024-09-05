import React from 'react'
import './ListaMensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
/* Lista de chat */

export const ListaMensajes = ({mook_mensajes}) => {
    let incrementador = 1
    return (
        <main className='main'>
            {
                mook_mensajes.map((mook_mensaje) => <Mensaje mensaje={mook_mensaje} key={incrementador++}/>)
            }
        </main>
    )
}

/* Mapeo por cada elemento invoca un mensaje */