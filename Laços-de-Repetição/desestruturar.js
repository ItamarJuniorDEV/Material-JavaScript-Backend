// desestruturar array é quando tem 2 arrays dentro de uma lista e
// colocar em variáveis, facilitando o uso.

const resposta = [
  ['João', 'Maria', 'Pedro'],
  [7, 8.5, 6]
];

// array nomes é [0] e o notas [1]
const [nomes, notas] = resposta;

console.log(nomes[1]);
console.log(notas[1]);