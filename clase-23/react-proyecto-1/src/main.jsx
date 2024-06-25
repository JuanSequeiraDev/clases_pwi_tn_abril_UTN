/* Buena practica importar libreria react en todos los archivos jsx */
import React from 'react' 

/* Usamos reactDOM para crear nuestro DOM virtual (de react) */
import ReactDOM from 'react-dom/client'

/* Importa el componente (funcion) app */
/* 
Los componentes son funciones que retornan JSX (JSX es un codigo muy parecido a HTML)
*/
import App from './App.jsx'

/* import { PI } from './funciones.js' */


ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> 
)

/* Los componentes se invocan con <componente /> */

/* Para mostrar el navegador de vite utilizar el comando:

//                    npm run dev

*/