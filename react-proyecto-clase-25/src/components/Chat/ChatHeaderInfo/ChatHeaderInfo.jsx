import React from 'react'
import './ChatHeaderInfo.css'

export const ChatHeaderInfo = () => {
    return (
        <section>
            <nav className='chat-nav'>
                <div className='user-info'>
                    <div className='arrow'><i class="bi bi-arrow-left"></i></div>
                    <div className='profile-pic'><img src="https://i.pinimg.com/236x/a1/96/a5/a196a54547dcab24f0a0e7dfe4e3bb2e.jpg" alt="Imagen del contacto" className='profile-img'/></div>
                    <div className='username-box'>pepe</div>
                </div>
                <div className='call-and-config'>
                    <div className='videocall'><i class="bi bi-camera-video"></i></div>
                    <div className='phonecall'><i class="bi bi-telephone"></i></div>
                    <div className='options'><i class="bi bi-three-dots-vertical"></i></div>
                </div>
            </nav>
        </section>
    )
}
