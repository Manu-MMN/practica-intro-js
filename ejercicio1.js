/*
Ejercicio 1

Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:

Nombre (el tuyo o inventado)

Apellidos (el tuyo o inventado)

Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha en formato "YYYY-MM-DD"

Si estás en búsqueda activa con un valor de verdadero o false

En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente.
*/

const usuario = {
    Nombre: "Manu",
    apellidos: "Martínez",
    boootcamp: [{
    Node: "2024-09-04",
    Git: "2024-10-18",
    react: "2024-12-16"
}
],
    enBusquedaActiva: true
}

console.log(usuario.boootcamp[0].react)

