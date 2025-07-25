// Spread Operator, estruturas:
// Array:
//const novoArray = [...arrayExistente];
// Objeto:
//const novoObjeto = { ...objetoExistente };
// Em argumentos:
// funcao(...array);
// Em array literal
// const combinado = [1, ...outroArray, 4];

// O spread operator clona o array e adiciona o conteúdo
const notas = [7,7,8,9];
const novaListaNotas = [...notas, 10];

// spread operator
// novaListaNotas.push(10);

// let nota = 9.75;
// let novaNota = nota;

// nota = 10;

console.log(notas);
console.log(novaListaNotas);