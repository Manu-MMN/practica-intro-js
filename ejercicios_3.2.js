/*
3.2 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/


const input = 10;

// create your function here

const splitInString = (list => list.toString().split("").join("-"));



splitInString(input); // '1-0'
console.log(splitInString(input));



const secondInput = 1;


splitInString(secondInput); // '1'
console.log(splitInString(secondInput))

const thirdInput = 11234;
splitInString(thirdInput); // '1-1-2-3-4'

console.log(splitInString(thirdInput));
