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
    {
        author: 'yo',
        text: 'Pepe?',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '4'
    },
    {
        author: 'yo',
        text: 'Porque me clavas el visto',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '5'
    },
    {
        author: 'yo',
        text: 'Pense que eramos amigos',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '6'
    },
    {
        author: 'yo',
        text: 'Sos igual a todos',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '7'
    },
    {
        author: 'yo',
        text: 'Que falso...',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '7'
    },
    {
        author: 'pepe',
        text: 'Jajajajaja troleadoooooo',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '7'
    },
    {
        author: 'yo',
        text: 'OMG SI ERAS REAL',
        state: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '7'
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
