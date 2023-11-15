/* // 1º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
// -------------------------------------------------------------------------------


// 2º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);
// ------------------------------------------------------------------------------


// 3º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);
// -------------------------------------------------------------------------------


// 4º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Victor', sobrenome: 'Vieira', idade: 26});
// -------------------------------------------------------------------------------


// 5º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Victor', sobrenome: 'Vieira', idade: 26};
funcao(obj);
// -------------------------------------------------------------------------------


// 6º-------------------------------------------------------------------------------
// argumentos que sustentam todos os argumentos enviados
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Victor', 'Vieira', 26]);
// ------------------------------------------------------------------------------- 


// 7º-------------------------------------------------------------------------------
const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
// -------------------------------------------------------------------------------


// 8º-------------------------------------------------------------------------------
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta('+', 1, 20, 30, 40, 50);
// ------------------------------------------------------------------------------- */


// 9º-------------------------------------------------------------------------------
const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
// -------------------------------------------------------------------------------