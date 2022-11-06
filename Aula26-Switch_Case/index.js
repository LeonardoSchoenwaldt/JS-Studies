function getDayWeekText(dayWeek) {
    let dayWeekText

    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo.';
            return dayWeekText;
        case 1:
            dayWeekText = 'Segunda.';
            return dayWeekText;
        case 2:
            dayWeekText = 'Terça.';
            return dayWeekText;
        case 3:
            dayWeekText = 'Quarta.';
            return dayWeekText;
        case 4:
            dayWeekText = 'Quinta.';
            return dayWeekText;
        case 5:
            dayWeekText = 'Sexta.';
            return dayWeekText;
        case 6:
            dayWeekText = 'Sábado.';
            return dayWeekText;
    }
}
const date = new Date();
const dayWeek = date.getDay();
const dayWeekText = getDayWeekText(dayWeek);
console.log(dayWeek, dayWeekText);