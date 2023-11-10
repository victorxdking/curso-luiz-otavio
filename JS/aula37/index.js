/* // 1º-------------------------------------------------------------------------------
const nomes = ['Victor', 'Luiz', 'Otávio'];

for (let i=0; i<nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('---------');


for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('---------');

for (let valor of nomes) {
    console.log(valor);
}

console.log('---------');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
// -------------------------------------------------------------------------------
 */


// 2º-------------------------------------------------------------------------------
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira'
};
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
// -------------------------------------------------------------------------------
