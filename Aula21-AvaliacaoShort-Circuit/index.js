// &&
function falar() {
    return 'Oi.';
}
let executar = false; // retora o valor mesmo
console.log(executar && falar());

// ||
const corUsuario = 'vermelho'; // se um valor falso fosse escrito ele retornaria a cor 'preto"
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);