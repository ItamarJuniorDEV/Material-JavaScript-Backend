/* 
Você foi a pessoa encarregada de desenvolver uma funcionalidade 
para o sistema de inspeções técnicas de uma fábrica.
Cada máquina inspecionada gera automaticamente um relatório de medições,
contendo dados como temperatura, vibração, pressão e nível de ruído.
Essas informações são organizadas dentro de um objeto,
onde cada chave representa uma categoria avaliada e o
valor representa o nível registrado na inspeção.

    Exibir todas as categorias avaliadas;
    Exibir todos os valores registrados;
    Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
    Se o valor for maior que 50, mostre a mensagem (alerta)
    Caso contrário, mostre (ok)

Exemplo de entrada:
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

Saída esperada:
Categorias avaliadas: [ 'temperatura', 'vibracao', 'pressao', 'nivelRuido' ]
Valores registrados: [ 75, 40, 55, 30 ]

Detalhamento:
temperatura: 75 (alerta)
vibracao: 40 (ok)
pressao: 55 (alerta)
nivelRuido: 30 (ok)
*/

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
console.log('Categorias avaliadas:', categorias);

const nivelRegistrado = Object.values(relatorio);
console.log('Valores registrados', nivelRegistrado);

const detalhamento = Object.entries(relatorio);
console.log('Detalhamento:');

for (const [categoria, valor] of detalhamento) {
  if (valor > 50) {
    console.log(`${categoria}: ${valor} (alerta)`);
  } else {
    console.log(`${categoria}: ${valor} (ok)`)
  }
}
