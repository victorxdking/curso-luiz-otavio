/* // return
// Retorna um valor
// Termina a função
// 1º-------------------------------------------------------------------------------
function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 2);
// -------------------------------------------------------------------------------


// 2º-------------------------------------------------------------------------------
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
})
// -------------------------------------------------------------------------------


// 3º-------------------------------------------------------------------------------
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Victor', 'Vieira');
const p2 = {
    nome: 'Luiz', 
    sobrenome: 'Otávio'
};

console.log(p1);
console.log(p2);
// -------------------------------------------------------------------------------


// 4º-------------------------------------------------------------------------------
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));
// -------------------------------------------------------------------------------


// 5º-------------------------------------------------------------------------------
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
// -------------------------------------------------------------------------------


// 6º-------------------------------------------------------------------------------
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
// ------------------------------------------------------------------------------- */


// 7º-------------------------------------------------------------------------------
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
// -------------------------------------------------------------------------------