const person = {
    firstName: 'Leonardo',
    lastName: 'Schönwaldt',
    age: 17,
    addres: {
        addresStreet: 'Céu',
        addresNumber: 534
    }
};

const { name, lastName, age} = person; 
const { addres: {addresStreet, addresNumber}, addres} = person;
console.log(lastName, addresStreet);