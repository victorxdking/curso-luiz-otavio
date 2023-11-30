/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor (o, 'prop')
Object.assign (des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/* 
const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,  
    material: 'porcelana'
};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
 */


/* 
const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, { material: 'porcelana'});

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
const caneca = { nome: produto.nome, preco: produto.preco};

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
const caneca = { nome: produto.nome, preco: produto.preco};
console.log(Object.keys(produto));
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
Object.freeze(produto);
produto.nome = 'Outro nome';
const caneca = { nome: produto.nome, preco: produto.preco};
console.log(produto);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
delete produto.nome;
console.log(produto);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
 */



/* 
const produto = { nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));
 */



/* 
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};
console.log(Object.entries(produto));
 */



const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}