/* // 1º-------------------------------------------------------------------------------
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
// ------------------------------------------------------------------------------- */


/* // 2º-------------------------------------------------------------------------------
// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(resto);
// ------------------------------------------------------------------------------- */


/* // 3º-------------------------------------------------------------------------------
// ... rest, ... spread
//                    0          1           2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);  
// ------------------------------------------------------------------------------- */