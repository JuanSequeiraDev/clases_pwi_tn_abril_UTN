/* En este archivo almacenan utilidades de fecha */

const obtenerFecha = () =>{
    const fecha = new Date()
    return fecha.getFullYear()
}

export {obtenerFecha}