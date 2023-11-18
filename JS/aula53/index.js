// Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}                             

const funcao = retornaFuncao('Victor');
const funcao2 = retornaFuncao('Luiz');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());