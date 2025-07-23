// 2. Crie uma função que receba uma array
// e imprima no console o número do índice e o elemento.

function receberArray(){

  const lista = [5.5, 7, 8];

  for (i = 0; i < lista.length; i++){
    console.log(`Índice: ${i}, valor: ${lista[i]}`);
  }
}
receberArray();
