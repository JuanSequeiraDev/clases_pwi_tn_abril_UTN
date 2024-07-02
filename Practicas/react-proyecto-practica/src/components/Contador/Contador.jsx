
import React, { useState } from 'react'

export const Contador = ({limit}) => {
        /* useState retorna = [valorActualDelEstado, fnParaCambiarElValor] || useState recibe = useState(valorInicial) */
        const [contador, setContador] = useState(0)      //Usamos useState() para crear un estado
        const handleIncrementar = () =>{          
            setContador(contador + 1)
            if(contador >= limit){
                setContador(contador)
            }
        }
    
        const handleDecrementar = () =>{          
            setContador(contador - 1)
            if(contador <= 0){
                setContador(contador)
            }
        }
    return (
    
    /* React solo recarga el componente que se modifica */
    
    /* Siempre que pueda evitar re-renderizarme lo voy a hacer */
    <div>
        {
            contador === 0
            ? <button onClick={handleIncrementar}>Comprar</button>   /* IF html */
            :
                (
                    <>
                        <button onClick={handleDecrementar}>-</button>
                        <span>Contador: {contador}</span>
                        {
                            contador === limit
                            ? <span>Has llegado al limite</span>
                            : <button onClick={handleIncrementar}>+</button>
                        }
                        { contador > 1 && <h2>Bien, sigue comprando</h2>}
                    </>
                )
        }
    </div>
    )
}
