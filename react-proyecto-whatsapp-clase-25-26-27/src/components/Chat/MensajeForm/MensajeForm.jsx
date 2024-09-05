import React from 'react'
import './MensajeForm.css'
import { Mensaje } from '../Mensaje/Mensaje'

export const MensajeForm = ({handleSubmitMensaje}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitMensaje(e.target.mensaje.value)
        /* e.target.reset() */
        console.log(e)
    }

    return (
        <div>
            <form className='message-hub' onSubmit={handleSubmit}>
                {/* <div className='emotes'><i class="bi bi-emoji-smile"></i></div>
                <div className='clipboard'><i class="bi bi-paperclip"></i></div>
                <div className='camera'><i class="bi bi-camera"></i></div> */}
                <input type="text" name='mensaje' className='message-input'/>
                <button type="submit" className='send-icon'><i className="bi bi-send-fill"></i></button>
            </form>
        </div>
    )
}



