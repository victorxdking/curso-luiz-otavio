// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
/* 
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let maior10 = [];

for (let i = 0; i < .length; i++) {
    if (numeros[i] > 10) {
        maior10.push(numeros[i]);
    }
}
console.log(maior10);
 */


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
 */


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return (valor > 10);
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
 */


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(function (valor) {
    return (valor > 10);
});

console.log(numerosFiltrados);
 */


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => (valor > 10));
console.log(numerosFiltrados); 
*/


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return (valor > 10)
});
console.log(numerosFiltrados);  
*/


// -------------------------------------------------------------------------------


/* 
// Retorne os números maiores que 10
//               0  1   2   3  4...  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => (valor > 50));
console.log(numerosFiltrados); 
 */


// -------------------------------------------------------------------------------


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Victor', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMais50Anos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);
console.log(pessoasComMais50Anos);
console.log(nomeTerminaComA);
