import react from 'react'
import { ProfileCard } from './ProfileCard'

let nombre = 'pepe'
const obtenerNombre = () => 'pepe'
const sumar = () => 1 + 1 

const App = () => {
    const persona_1 = {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 89,
        ubicacion: 'calle 123'
    }
    const persona_2 = {
        nombre: 'juan',
        apellido: 'ruiz',
        edad: 48,
        ubicacion: 'Av scal 123'
    }
    return (
        <div>
            <ProfileCard
                /* titulo={[array]}  *//* siempre utilizar llaves (no son necesarias solo con strings) */
                persona={persona_1}
            />
            <ProfileCard
                persona={persona_2}
            />
        </div>
    )
}

export default App