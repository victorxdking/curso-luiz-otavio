function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos);
    return data.toLocaleTimeString('pr-BR', {
        hour12: false
    });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (event) {
    relogio.innerHTML = alert('cliquei no iniciar');
});

pausar.addEventListener('click', function (event) {
    alert('cliquei no pausar');
});

zerar.addEventListener('click', function (event) {
    alert('cliquei no zerar');
});

