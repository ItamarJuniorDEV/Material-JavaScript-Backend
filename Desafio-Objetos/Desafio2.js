/*
Você está criando um painel de configurações para um aplicativo. 
As configurações são armazenadas em um objeto 
e você precisa acessar informações específicas para exibição.

Escreva um programa que:

    Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
    Acesse tema usando notação de ponto.
    Acesse idioma usando notação de colchetes.
    Exiba os dois valores no console.

Exemplo de entrada:
  const configuracoes = {
  // preencha com as propriedades necessárias
};

Saída esperada:
Tema: escuro  
Idioma: pt-BR
*/

const configuracoes = {
  tema: 'escuro',
  notificacoes: true, 
  idioma: 'pt-BR',
} 
const tema = configuracoes.tema;
const idioma = configuracoes['idioma'];

console.log(`Tema: ${tema}`);
console.log(`Idioma: ${idioma}`);
