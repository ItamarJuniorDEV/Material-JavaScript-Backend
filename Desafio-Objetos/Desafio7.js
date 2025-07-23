/*
Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa.
Os dados chegam como um array de pares,
onde cada par representa uma chave e seu respectivo valor,
e você precisa transformar isso em um objeto estruturado,
que será usado pelo sistema para preencher os campos automaticamente.

Sua tarefa é:

Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor,
como este:
[
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]

 A função deve retornar um objeto com essas propriedades montadas:
{
  nome: 'João',
  idade: 30,
  cidade: 'Curitiba'
}
*/

function montarObjeto(pessoa) {

  const objeto = Object.fromEntries(pessoa);
  return objeto;
}
  const dados = [
      ['nome', 'João'],
      ['idade', 30],
      ['cidade', 'Curitiba']   
    ];
  console.log(montarObjeto(dados));
