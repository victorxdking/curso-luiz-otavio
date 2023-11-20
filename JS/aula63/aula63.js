/*// 1º-------------------------------------------------------------------------------
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);


// 2º-------------------------------------------------------------------------------
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio');
console.log(nomes, removidos);


// 3º-------------------------------------------------------------------------------
// pop
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);


// 4º-------------------------------------------------------------------------------
// shift
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(0, 1);
console.log(nomes, removidos);


// 5º-------------------------------------------------------------------------------
// push
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', 'Miranda');
console.log(nomes, removidos);
// ------------------------------------------------------------------------------- */


// 6º-------------------------------------------------------------------------------
// unshift
//               -5       -4      -3        -2        -1
//                0        1       2         3         4
const nomes = ['Maria', 'João', 'Victor', 'Artur', 'Cláudia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(0, 0, 'Luiz', 'Otavio');
console.log(nomes, removidos);

