const h1 = document.querySelector('.container h1');
const date = new Date();

function getDayWeekText(dayWeek) {
    let dayWeekText

    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo';
            return dayWeekText;
        case 1:
            dayWeekText = 'Segunda-feira';
            return dayWeekText;
        case 2:
            dayWeekText = 'Terça-feira';
            return dayWeekText;
        case 3:
            dayWeekText = 'Quarta-feira';
            return dayWeekText;
        case 4:
            dayWeekText = 'Quinta-feira';
            return dayWeekText;
        case 5:
            dayWeekText = 'Sexta-feira';
            return dayWeekText;
        case 6:
            dayWeekText = 'Sábado.';
            return dayWeekText;
    }
}

function getMonthText(month) {
    let monthtext

    switch (month) {
        case 0:
            monthtext = "Janeiro";
            return monthtext;
        case 1:
            monthtext = "Fevereiro";
            return monthtext;
        case 2:
            monthtext = "Março";
            return monthtext;
        case 3:
            monthtext = "Abril";
            return monthtext;
        case 4:
            monthtext = "Maio";
            return monthtext;
        case 5:
            monthtext = "Junho";
            return monthtext;
        case 6:
            monthtext = "Julho";
            return monthtext;
        case 7:
            monthtext = "Agosto";
            return monthtext;
        case 8:
            monthtext = "Setembro";
            return monthtext;
        case 9:
            monthtext = "Outubro";
            return monthtext;
        case 10:
            monthtext = "Novembro";
            return monthtext;
        case 11:
            monthtext = "Dezembro";
            return monthtext;
    }
}

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function createDate(date) {
    const dayWeek = date.getDay();
    const month = date.getMonth();
    const monthtext = getMonthText(month);
    const dayWeekText = getDayWeekText(dayWeek);

    return `${dayWeekText}, ${date.getDate()} de ${monthtext} de ${date.getFullYear()} 
    ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}:${leftZero(date.getSeconds())}`
}

h1.innerHTML = createDate(date);