import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../components/Chat'

const MOOK_MENSAJES = [
    {
        author: 'yo',
        text: 'Hola pepe',
        state: 'visto',
        day: 'hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'pepe',
        text: 'Hola que tal?',
        state: 'visto',
        day: 'hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'yo',
        text: 'Sos real? OMG',
        state: 'no recibido',
        day: 'hoy',
        hour: '13:17',
        id: '3'
    },
]


/* Pasar los mensajes a la lista de mensajes, dicha lista por cada mensae debera crear un componente Mensaje y ese componente recibira cada objeto de mensaje*/

/* Pantalla de chat */
export const ChatScreen = () => {

    return (
        <>
            <ChatHeaderInfo/>
            {/* Este componente hara el mapeo */}
            <ListaMensajes mook_mensajes={MOOK_MENSAJES}/>
            <MensajeForm/>
        </>
    )
}
