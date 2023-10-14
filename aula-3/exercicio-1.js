/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

// let lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numerosImpares2 = [];
// let numerosPares2 = [];

// lista.forEach(numero => (numero % 2 === 0 ? numerosPares2 : numerosImpares2).push(numero));

// console.log(`Numeros impares = ${numerosImpares}\nNumeros pares = ${numerosPares}`);


let lista = [1,2,3,4,5,6,7,8,9]
let numerosImpares = []
let numerosPares = []

for (let i = lista[0];i < lista.length; i++) {
i % 2 === 0 ? numerosPares.push(i): numerosImpares.push(i);
}

console.log(`Numeros impares = ${numerosImpares} 
Numeros pares = ${numerosPares}`)
