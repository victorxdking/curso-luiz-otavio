/* // 1º-------------------------------------------------------------------------------
const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Otávio'; //criando
    var nome2 = 'Rogério'; // redeclarando
    
    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);
// ------------------------------------------------------------------------------- */
 
 
/* // 2º-------------------------------------------------------------------------------
const verdadeira = true;

function falaOi () {
    
    if (verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
    }
    
    console.log(sobrenome);
}

falaOi(); 
// ------------------------------------------------------------------------------- */


// 3º-------------------------------------------------------------------------------
let sobrenome = 'Miranda';
console.log(sobrenome);
// -------------------------------------------------------------------------------