/*
Ejercicio 2 Arreglar bug

Nuestro cliente está intentando calcular el promedio de una lista de números pero nos dice que no funciona. No nos da el error, solo este código que es el que tiene en producción Para este ejercicio tenemos que crear un archivo llamado bug.js con la solución


const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i <= numeros.length; i++) {
        sumaTotal += numeros[i];
}

const promedio = sumaTotal / numeros.length;
return promedio;
}
const listaNumeros = [1,2,3,4,5];
const promedioNumeros = calcularPromedio(listaNumeros)
*/ 

// En este caso, el bug reside en la condición i=> numeros.length.
// El índice de los arrays comienza en 0 mientras que length devuelve la cantidad total de elementos en el array.

//Ejercicio corregido:


const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
}
const promedio = sumaTotal / numeros.length; 
return promedio;
}
const listaNumeros = [1,2,3,4,5];
const promedioNumeros = calcularPromedio(listaNumeros)

console.log(promedioNumeros)

console.log(listaNumeros.length)