const nome = 'Leonardo';
const sobrenome = 'Schoenwaldt';
const idade = 17;
const peso = 75;
const alturaEmM = 1.81;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem idade anos, pesa ${peso} kg`); //
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); //
console.log(`${nome} nasceu em ${anoNascimento}.`); // template strings