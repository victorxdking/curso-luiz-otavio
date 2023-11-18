// 1º-------------------------------------------------------------------------------
const nome = 'Victor';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();
// -------------------------------------------------------------------------------


// 2º-------------------------------------------------------------------------------
const nome = 'Victor';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Vieira';
    falaNome();
}
usaFalaNome();
// -------------------------------------------------------------------------------
