/*3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/




// create your function here
const input1 = 'string';

const putItBack = (string, number) => {
let result = string.split("").reverse().join("")
    return number + " " + result
}

console.log(putItBack(input1, 6))
putItBack(input1, 6); // '6 gnirts'


const input2 = 'variable';
putItBack(input2, 8); // '8 elbairav'
console.log(putItBack(input2, 8))


const input3 = 'pointer';
putItBack(input3, 7); // '7 retniop'
console.log(putItBack(input3, 7))