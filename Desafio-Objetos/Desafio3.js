/* 
Você está criando um aplicativo de culinária que mostra receitas com 
seus ingredientes,tempo de preparo e instruções. 
Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array.
Diante disso, escreva um programa que:

    Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
    Acesse o índice 2 da lista que está dentro do objeto.
    Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

Exemplo de entrada:
const receita = {
  // preencha com as propriedades necessárias
};

Saída esperada:
Ingrediente complementar: farinha de trigo
*/

// receitas = ingredientes, tempo de preparo, instrucoes
const receita = {
  nome: 'bolo',
  ingredientes: [
    '2 ovos',
    'fermento',
    'farinha de trigo',
    'leite',
    'margarina',
  ],
  tempoPreparo: '5 horas'
}
const indice = receita.ingredientes[2];
console.log(`Ingrediente complementar: ${indice}`);
