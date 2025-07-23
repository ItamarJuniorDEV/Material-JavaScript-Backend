// 5 - Considere um array de números inteiros.

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e 
// exibir no console o resultado de cada multiplicação. 
// Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numeros = [6, 9, 12, 15, 18, 21];
const numeroBuscado = 18;

// Multiplica e mostra no console
numeros.forEach(numero => {
console.log(numero * 3);
});

const indice = numeros.findIndex(num => num === numeroBuscado);
console.log(`Índice do número ${numeroBuscado}: ${indice}`);



