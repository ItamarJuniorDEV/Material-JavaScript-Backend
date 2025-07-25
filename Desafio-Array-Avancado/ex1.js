// 1- Faça uma função que aceite vários arrays como argumentos 
// e retorne um único array contendo todos os elementos dos arrays
//  fornecidos, utilizando Spread Operator.

function variosArrays(...arrays) {
  return [].concat(...arrays);
}

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [5,6];
const arraysConcatenados = variosArrays(arr1, arr2, arr3);
console.log(arraysConcatenados);

// Passo a passo:
// 1. Cria uma função que aceita vários arrays (usa ...arrays pra pegar arrays como argumentos) 
// 2. Dentro da função, cria um array vazio [] como base da junção
// 3. Usa concat(...arrays) pra juntar todos os arrays recebidos em um só, com Spread.
// 4. Salva o resultado da função e arraysConcatenados e mostra no console