function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa01 = criarPessoa('Leonardo', 'Schönwaldt', 17);
console.log(pessoa01.nome);