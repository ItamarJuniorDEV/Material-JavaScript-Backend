// Retorna o array sem números repetidos
// Não funciona junto com método de array, pois não tem acesso a eles


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João"];

// const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

// Conjuto de 4 elementos
// console.log(nomesAtualizados);

// Array de 4 elementos criado apartir do conjunto
console.log(listaNomesAtualizados);