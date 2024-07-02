import react, { useState } from 'react'
import { ColorCard } from './components/ColorCard/ColorCard'
import '/src/style.css'
import { ColorCardList } from './components/ColorCard/ColorCardlist'
import { Contador } from './components/Contador/Contador'
import { NewColorCardForm } from './components/NewColorCardForm/NewColorCardForm'

/* const listaArticulos = [                              // Lista JSX
    <div key={1}>
        <h2>pepe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam numquam harum? Ea saepe, magnam iure repellendus laboriosam voluptate pariatur enim eveniet! Alias inventore ex quos quibusdam consectetur ipsa eius!</p>
    </div>
    ,
    <div key={2}>
        <h2>pepe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam numquam harum? Ea saepe, magnam iure repellendus laboriosam voluptate pariatur enim eveniet! Alias inventore ex quos quibusdam consectetur ipsa eius!</p>
    </div>
    ,
    <div key={3}>                                 // La key puede ser un string o un numero
        <h2>pepe</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quibusdam numquam harum? Ea saepe, magnam iure repellendus laboriosam voluptate pariatur enim eveniet! Alias inventore ex quos quibusdam consectetur ipsa eius!</p>
    </div>
] */

/*     const personas = ['pepe','juan','maria']
    const listaJSXPersonas = personas.map((persona) =>{
        return(               //aca debe ir JSX
            <div>{persona}</div>
        )
    }) */


        const colors_card_info = [
            {
                likes: 9,
                fecha: '9/12/2018',
                colores: ['#36BA98','#E9C46A','#F4A261','#E76F51']
            },
            {
                likes: 12,
                fecha: '1 hora',
                colores: ['#667BC6','#FDFFD2','#FFB4C2','#DA7297']
            },
            {
                likes: 2018,
                fecha: '2 dias',
                colores: ['#F5F7F8','#F4CE14','#379777','#45474B']
            },
            {
                likes: 4,
                fecha: '1 dia',
                colores: ['#071952','#088395','#37B7C3','#EBF4F6']
            }
        ]  



const App = () => {
        /* No usar a document a menos que sea estrictamente necesario */

        const [colorCardInfoList, setColorCardInfoList] = useState(colors_card_info)


        const handleSubmitNewColorCard = (e) =>{
            e.preventDefault()
        const newColorCard = {
            colores: [],
            likes: 0,
            fecha: e.target.fecha.value,
            id: 7,
        }
        for(let i = 1; i <= 4; i = i + 1){
            newColorCard.colores.push(e.target['color-' + i].value)
        }
        setColorCardInfoList([...colorCardInfoList, newColorCard]) /* Clona el array literalmente, no es lo mismo que referenciar un array, ya que no se le aplican cambios como cuando referenciamos a otro array y lo modificamos */
    }
    return (
        <>
        <ColorCardList colors_info={colorCardInfoList}/>
        <NewColorCardForm handleSubmitNewColorCard={handleSubmitNewColorCard}/> {/* Para que un hijo se comunique con un padre se pueden usar props */}
        <Contador limit={10}/>
        {/* <section className='color-cards-section'>
            < ColorCard
                likes={ 3 }
                fecha='1 hour'
                colores={['#36BA98','#E9C46A','#F4A261','#E76F51']}
            />
            < ColorCard
                likes={132}
                fecha='yesterday'
                colores={['#667BC6','#FDFFD2','#FFB4C2','#DA7297']}
            />
            < ColorCard
                likes={184}
                fecha='2 days'
                colores={['#F5F7F8','#F4CE14','#379777','#45474B']}
            />
            < ColorCard
                likes={416}
                fecha='3 days'
                colores={['#071952','#088395','#37B7C3','#EBF4F6']}
            />
        </section> */}
        {/* {listaJSXPersonas} */}
        {/* <img src="" alt="" />   poner barra al final para cerrar etiquetas de auto cerrado de HTML5 */}
        </>
    )
}

export default App




/* 
1er Ejercicio:
Crear un componente contador que renderize:

boton de decrementar
span con valor de contador
boton de incrementar 

2da parte
El decrementar no debe bajar a menos de uno

3era parte
El incrementar denera estar limitado por una prop llamada limit que recibira el contador
*/

/* 
Tarea:
Agregar a la aplicacion de chat la funcionalidad de escribir nuevos mensajes
*/