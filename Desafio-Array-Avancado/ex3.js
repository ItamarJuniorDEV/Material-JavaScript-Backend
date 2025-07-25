// 3- Crie um programa que una essas duas listas, 
// removendo cores duplicadas e exiba a lista final. 
// Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

let coresUnificados = coresLista1.concat(coresLista2);

const resultadoSet = new Set(coresUnificados);

const resultado = [...resultadoSet];
console.log(resultado);

// Passo a passo:
// 1. Junta as duas listas de cores usando concat
// 2. Cria um set para tirar as cores repetidas
// 3. Converte o Set de volta para um array com [...]
// 4. Mostra a lista final sem duplicados no console 
