const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [firstNumber, secondNumber, ...rest] = numbers; // a vírgula pode ser usada como um espaço vazio [firstNumber, , ...restNumbers]
console.log(firstNumber, secondNumber);
console.log(...rest);