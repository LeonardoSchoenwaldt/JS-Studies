const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `A raiz quadrada do seu número é: ${numero ** 0.5}<br />`;
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}<br />`;
texto.innerHTML += `É NaN? ${Number.isNaN(numero)}<br />`;
texto.innerHTML += `Seu número arredondado para baixo é: ${Math.floor(numero)}<br />`;
texto.innerHTML += `Seu número arredondado para baixo é: ${Math.ceil(numero)}<br />`;
texto.innerHTML += `Seu número com duas casas decimais: ${numero.toFixed(2)}<br />`;