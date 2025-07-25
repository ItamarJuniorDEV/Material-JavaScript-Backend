//  2- Crie um array de números chamado valores. 
// Depois,escreva um programa 
// que some todos os elementos deste array utilizando o método reduce.

const valores = [4, 5, 78, 4.5, 3.5];

const soma = valores.reduce((acumulador, valor) => acumulador + valor,0);
console.log(soma);

// Passo a passo:
// 1. Cria um array chamado valores com vários números dentro
// 2. Usa o reduce para somar todos os números do array
// 3. O reduce começa a soma com 0 (valor inicial)
// 4. Mostra no console o resultado da soma
