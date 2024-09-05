import React, { useEffect, useState } from 'react'
import './ChatHeaderInfo.css'
import { Link, useParams } from 'react-router-dom'
import { MOOK_CONTACTOS } from '../../../data'
import { getContacts } from '../../../fetching/getContacts'



export const ChatHeaderInfo = () => {
    const {chatId} =useParams()
    const [img, setImg] = useState()
    const [nombre, setNombre] = useState()

    const idChatReal = chatId - 1
    useEffect(
        ()=> {
            getContacts().then(
                (MOOK) =>{
                    setImg(MOOK[idChatReal].img)
                    setNombre(MOOK[idChatReal].nombre)
                }
            )
        },
        []
    )



    return (
        <section className='top-section-nav'>
            <nav className='chat-nav'>
                <div className='user-info'>
                    <Link to={'/'}><div className='arrow'><i className="bi bi-arrow-left"></i></div></Link>
                    <div className='profile-pic'><img src={img} alt="Imagen del contacto" className='profile-img'/></div>
                    <div className='username-box'>{nombre}</div>
                </div>
                <div className='call-and-config'>
                    <div className='videocall nav-end'><i className="bi bi-camera-video"></i></div>
                    <div className='phonecall nav-end'><i className="bi bi-telephone"></i></div>
                    <div className='options nav-end'><i className="bi bi-three-dots-vertical"></i></div>
                </div>
            </nav>
        </section>
    )
}
