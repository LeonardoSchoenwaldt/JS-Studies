//  (let i = 0; i <= 500; i += 10)
for (let i = 0; i <= 500; i++) {
    console.log(`Line ${i}`);
}

for (let i = 0; i <= 500; i++) {
    const evenOdd = i % 2 === 0 ? 'even' : 'odd';
    console.log(i, evenOdd);
}

const fruits = ['Maça', 'Abacaxi', 'Morango', 'Maracuja', 'Laranja']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}