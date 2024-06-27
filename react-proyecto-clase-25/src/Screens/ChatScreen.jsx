import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../components/Chat'




/* Pasar los mensajes a la lista de mensajes, dicha lista por cada mensae debera crear un componente Mensaje y ese componente recibira cada objeto de mensaje*/

/* Pantalla de chat */
export const ChatScreen = () => {

    return (
        <div>
            <ChatHeaderInfo/>
            {/* Este componente hara el mapeo */}
            <ListaMensajes/>
            <MensajeForm/>
        </div>
    )
}
