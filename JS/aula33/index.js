/* // 1º-------------------------------------------------------------------------------
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira',
    idade: '26',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);
// ------------------------------------------------------------------------------- */

// 2º-------------------------------------------------------------------------------
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira',
    idade: '26',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação ... resto
const { nome, ...resto } = pessoa;
console.log(nome, resto);
// -------------------------------------------------------------------------------
