import React from "react";
import '/src/style.css'

export const ColorCard = ({tarjeta}) =>{        /* PARA DESESTRUCTURAR UN ARRAY CORCHETES AL PROP */
    const {likes, fecha, colores} = tarjeta
    /* const likes = props.likes
    const fecha = props.fecha
    const colores = props.colores */
    return(
        <div className="color-card">
            <div className="colors">
                <ColorItemList colors={colores}/>
            </div>
            {/* <div className="color" style={{backgroundColor: colors[0]}} ></div>
                <div className="color" style={{backgroundColor: colors[1]}} ></div>
                <div className="color" style={{backgroundColor: colors[2]}} ></div>
                <div className="color" style={{backgroundColor: colors[3]}} ></div>
            */}
            <div className="color-card-control">
                <span className="likes"><i className="bi bi-heart"></i> {likes}</span>
                <span className="fecha">{fecha}</span>
            </div>
        </div>
    )
}

const ColorItemList = ({colors}) =>{
    return(
        <>
            {colors.map(color=> <ColorItem color={color} key={color}/>)}
        </>
    )
}



/* const mensajeItemList = ({mensajes}) =>{
    return(
        <>
            {mensajes.map(mensaje => <Mensaje  />)}
        </>
    )
}*/

const ColorItem = ({color}) =>{
    return(
        <div className="color" style={{backgroundColor: color}} ></div>
    )
}