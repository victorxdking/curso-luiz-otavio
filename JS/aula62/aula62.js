/*// 1º-------------------------------------------------------------------------------
//                0         1        2
// const nomes = ['Victor', 'Maria', 'Joana'];
const nomes = new Array('Victor', 'Maria', 'Joana');
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);


// 2º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
const novo = nomes;

novo.pop();
console.log(nomes);
console.log(novo);


// 3º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
console.log(nomes.length);


// 4º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
const removido = nomes.pop();
console.log(nomes, removido);


// 5º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
const removido = nomes.shift();
console.log(nomes, removido);


// 6º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
nomes.push('João');
nomes.push('Wallace');
console.log(nomes);


// 7º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2
const nomes = ['Victor', 'Maria', 'Joana'];
nomes.unshift('João');
nomes.unshift('Wallace');
console.log(nomes);


// 8º-------------------------------------------------------------------------------
// Valor por referência
//                0         1        2         3          4
const nomes = ['Victor', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, -2);
console.log(novo);


// 9º-------------------------------------------------------------------------------
const nome = 'Victor Vieira Silva';
const nomes = nome.split(' ');
console.log(nomes);
// ------------------------------------------------------------------------------- */


// 10º-------------------------------------------------------------------------------
const nomes = ['Victor', 'Vieira', 'Silva'];
const nome = nomes.join(' ');
console.log(nome);