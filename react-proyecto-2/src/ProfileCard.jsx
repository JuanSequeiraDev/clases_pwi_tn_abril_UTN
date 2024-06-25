import React from "react";

export const ProfileCard = ({persona}) => {   //desestructurizacion en los parametros
    
    const {nombre, apellido, edad, ubicacion} = persona   //Desestructurizacion de un objeto
    /* const [valor_1, valor_2] = valores */                   //Desestructurizacion de un array
    return(
        <div>
            <h2 style={{backgroundColor: '#36BA98'}}>Nombre completo: {nombre} {apellido}</h2>
            <span><strong>Edad:</strong>{edad}</span>
            <h3>ubicacion: {ubicacion}</h3>
        </div>
    )
}

/* export const ProfileCard = (props) => {                           //EN CASO DE DESESTRUCTURIZAR MAS DE UN PROP
    const persona = props.persona
    const {nombre, apellido, edad, ubicacion} = persona   //Desestructurizacion de un objeto
    return(
        <div>
            <h2>Nombre completo: {nombre} {apellido}</h2>
            <span><strong>Edad:</strong>{edad}</span>
            <h3>ubicacion: {ubicacion}</h3>
        </div>
    )
} */