// deleta e adiciona elementos no array
// primeiro parâmetro, é o índice inicial da exclusão
// segundo parâmetro, quantos elementos a mais quer excluir
// terceiro parâmetro, elemento a ser incluído
// exclui na ordem sequencial pela direita
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);