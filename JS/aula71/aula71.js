/* 
// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, // pode alterar 
        configurable: false // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000
delete p1.estoque;
console.log(p1);
 */



/* 
// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, // pode alterar 
        configurable: true // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000
delete p1.estoque;
console.log(p1);
 */



/* 
// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave
        value: estoque, // valor 
        writable: true, // pode alterar 
        configurable: true // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}
 */



/* 
// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, // pode alterar 
        configurable: true // configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}
 */




// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, // pode alterar 
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor 
            writable: true, // pode alterar 
            configurable: true // configurável    
        },   
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor 
            writable: true, // pode alterar 
            configurable: true // configurável      
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}