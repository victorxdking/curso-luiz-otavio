/* 
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
 */



/* 
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Vieira'
};

const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);
 */



/* 
const pessoa1 = new Object();
pessoa1.nome = 'Victor'
pessoa1.sobrenome = 'Vieira';

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
console.log(pessoa1, pessoa2);
 */



/* 
const pessoa1 = new Object();
pessoa1.nome = 'Victor'
pessoa1.sobrenome = 'Vieira';

delete pessoa1.nome;
console.log(pessoa1);
 */



/* 
const pessoa1 = new Object();
pessoa1.nome = 'Victor'
pessoa1.sobrenome = 'Vieira';
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
 */


/* 
const pessoa1 = new Object();
pessoa1.nome = 'Victor'
pessoa1.sobrenome = 'Vieira';
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(chave);
};
 */



/* 
const pessoa1 = new Object();
pessoa1.nome = 'Victor'
pessoa1.sobrenome = 'Vieira';
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
};
 */



/* 
// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        } 
    };
}

const p1 = criaPessoa('Victor', 'Vieira');
console.log(p1.nomeCompleto());
 */



/* 
// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; // {nome: 'Victor', sobrenome: 'Vieira'}
}

// {} <- this -> this
const p1 = new Pessoa('Victor', 'Vieira');
const p2 = new Pessoa('Maria', 'Vieira');
console.log(p1);
console.log(p2);
 */



/* 
// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa('Victor', 'Vieira');
p1.nome = 'Outra coisa';
p1.sobrenome = 'Qualquer coisa';
const p2 = new Pessoa('Maria', 'Vieira');

console.log(p1);
console.log(p2); 
*/




// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa('Victor', 'Vieira');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Vieira');

console.log(p1);
console.log(p2); 
