/*
const userPoints = 1000;
if (userPoints >= 1000) {
    console.log('Vip user.');
} else {
    console.log('Normal user.');
}
*/

// Encurtar linhas de código usando: (condição) ? 'valor para verdadeiro' : 'valor para falso';
const userPoints = 1000;
const user = userPoints >= 1000 ? 'Vip user.' : 'Normal user.';
console.log(user);