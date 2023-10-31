/* Primitivos - String, Number, Boolean, undefined, null (BigInt, Symbol) - Valor

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Victor',
    sobrenome: 'Vieira'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);



// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Victor');
// console.log(a, c);