const trueConst = true;

// let tem escopo de bloco 
// var só respeita escopo de função
let nameUser = 'Leonardo'; // criada
var nameUser2 = 'Leonardo'; // criada
console.log(nameUser);

if (trueConst) {
    let nameUser = 'Deus'; // criada
    var nameUser2 = 'Deus'; // redeclarada
    console.log(nameUser);

    if (trueConst) {
        let nameUser = 'Jesus'; // criada
        var nameUser2 = 'Jesus'; // redeclarada
        console.log(nameUser);
    }
}
console.log(nameUser2);