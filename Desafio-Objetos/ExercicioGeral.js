/* 
  Crie um objeto 'pessoa' como jogadora em uma
  plataforma de games
  e adicione algumas características como propriedades
*/

const pessoa = {
  nome: 'Itamar Jr',
  data_nascimento: '1997-01-29',
  cpf: '12345678910',
  pontuacao: '3500',
  trofeus: ['platina', 'mvp',]
};

/* 
  Imprima no terminal o nome da pessoa 
  e um dos troféus
*/

console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

/* 
  Exclua uma propriedade do objeto
*/

delete pessoa.cpf;
console.log(pessoa);

/* 
  Crie uma função para iterar os troféus
*/

function exibeTrofeus(listaTrofeu) {
  for(const trofeu of listaTrofeu){
      console.log(`tem o troféu ${trofeu}`);
  };
};
exibeTrofeus(pessoa.trofeus);

/*
1. listaTrofeu é o nome do parâmetro da função.
2. Quando chamamos exibeTrofeus(pessoa.trofeus),
   estamos mandando ['platina', 'mvp'] pra função.
3. O for...of cria a variável trofeu sozinho,
   pegando um item da lista por vez:
   1ª volta: trofeu = 'platina'
   2ª volta: trofeu = 'mvp'
*/

/* 
  Adicione ao obj um método para calcular 
  a idade da pessoa
  e retornar o valor no terminal como string
*/
const user = {
  nome: 'Itamar Jr',
  data_nascimento: '1997-01-29',
  cpf: '12345678910',
  pontuacao: '3500',
  trofeus: ['platina', 'mvp',]
};

user.calculaIdade = function calculaIdade() {
  const anoNasc = parseInt(this.data_nascimento.slice(0,4));
  const idade = new Date().getFullYear() - anoNasc;
  console.log(`A idade é ${idade}`);
}
user.calculaIdade();
console.log(user);

/* 
  Acesse um array de objetos
  e imprima no terminal os nomes e status de ativação
  de cada pessoa
*/
const clientes = [
  {
    nome: 'Marina M',
    ativo: true,
  },
  {
    nome: 'Rafael R',
    ativo: false,
  },
  {
    nome: 'Fabio F',
    ativo: false,
  },
]

for (const cliente of clientes) {
  const status = cliente.ativo ? 'ativo': 'inativo';
  console.log(`status cliente ${cliente.nome}: ${status}`);
}

