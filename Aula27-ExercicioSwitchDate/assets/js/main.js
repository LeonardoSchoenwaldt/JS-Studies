const h1 = document.querySelector('.container h1');
const date = new Date();

function getDayWeekText() {
    const dayWeek = date.getDay();
    let dayWeekText

    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo';
            break;
        case 1:
            dayWeekText = 'Segunda-feira';
            break;
        case 2:
            dayWeekText = 'Terça-feira';
            break;
        case 3:
            dayWeekText = 'Quarta-feira';
            break;
        case 4:
            dayWeekText = 'Quinta-feira';
            break;
        case 5:
            dayWeekText = 'Sexta-feira';
            break;
        case 6:
            dayWeekText = 'Sábado.';
            break;
    }
    return dayWeekText;
}

function getMonthText() {
    const month = date.getMonth();
    let monthtext

    switch (month) {
        case 0:
            monthtext = "Janeiro";
            break;
        case 1:
            monthtext = "Fevereiro";
            break;
        case 2:
            monthtext = "Março";
            break;
        case 3:
            monthtext = "Abril";
            break;
        case 4:
            monthtext = "Maio";
            break;
        case 5:
            monthtext = "Junho";
            break;
        case 6:
            monthtext = "Julho";
            break;
        case 7:
            monthtext = "Agosto";
            break;
        case 8:
            monthtext = "Setembro";
            break;
        case 9:
            monthtext = "Outubro";
            break;
        case 10:
            monthtext = "Novembro";
            break;
        case 11:
            monthtext = "Dezembro";
            break;
    }
    return monthtext;
}

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function createDate(date) {
    const monthtext = getMonthText();
    const dayWeekText = getDayWeekText();

    return `${dayWeekText}, ${date.getDate()} de ${monthtext} de ${date.getFullYear()} 
    ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}:${leftZero(date.getSeconds())}`
}

h1.innerHTML = createDate(date);

/*
const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
*/