/*
Victor Vieira tem 26 anos, pesa 90 kg
tem 1.77 de altura e seu IMC é de 25.5
Victor Vieira nasceu em 1997
*/
const nome = 'Victor';
const sobrenome = 'Vieira';
const idade = 26;
const peso = 90;
const altura = 1.77;
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${altura}m de altura.
Seu IMC é de ${imc.toFixed(2)}\n ${nome} ${sobrenome} nasceu em ${anoNascimento}.`)