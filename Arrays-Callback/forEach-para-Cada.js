/*
  Estruturas:
  1. array.forEach(function(valor-iterar, posição) {
     // código usando valor-iterado, posição
    });
  
  2. array.forEach((valor-iterar, posição) => {
     // código usando valor-iterado, posição
    });

  Usado no Backend, para:
  - Salvar registros no banco após receber uma lista

  Com arrow function:
  notas.forEach(function(nota) {
  console.log(nota);
  });

  Foreach só é usado com números quando precisa fazer alguma ação em
  cada número da lista

  Se for usar array ou variável, podemos buscar o valor pelo índice


 Fluxo:
1. declara uma variável com 0 ou [] dependendo da saída)
2. coloca abaixo: nome-do-array.forEach(function (nome-qualquer){})
3. Agora pra pegar o que queremos, chamamos o array criado no começo
4. Chamamos o parâmetro criado e o índice pra capturar
*/

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

