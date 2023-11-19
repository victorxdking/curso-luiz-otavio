/* // 1º-------------------------------------------------------------------------------
// IIFE -> Immediately invoked function expression
(function() {
    const nome = 'Victor';
    console.log(nome);
})();

const nome = 'Qualquer coisa';


// 2º-------------------------------------------------------------------------------
// IIFE -> Immediately invoked function expression
(function() {
    
    const sobrenome = 'Vieira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Victor'))
    }
    
    falaNome();
    
})();

// ------------------------------------------------------------------------------- */


// 3º-------------------------------------------------------------------------------
// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    
    const sobrenome = 'Vieira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Victor'))
    }

    falaNome();
    console.log(idade, peso, altura);

})(26, 85, 1.77);

