/* // 1º-------------------------------------------------------------------------------
const frutas = ['Pera', 'Maça', 'Uva'];

for(let i=0; i<frutas.length; i++) {
    console.log(frutas[i]);
}
// -------------------------------------------------------------------------------


// 2º-------------------------------------------------------------------------------
// For in -> lê os indices ou chaves do objeto
//                 0       1      2
const frutas = ['Pera', 'Maça', 'Uva'];

for(let index in frutas) {
    console.log(frutas[index]);
}
// ------------------------------------------------------------------------------- */


// 3º-------------------------------------------------------------------------------
// For in -> lê os indices ou chaves do objeto
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira',
    idade: 26,
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
// -------------------------------------------------------------------------------