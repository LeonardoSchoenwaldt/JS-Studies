function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const day = leftZero(date.getDate());
    const month = leftZero(date.getMonth() + 1);
    const year = leftZero(date.getYear());
    const hours = leftZero(date.getHours());
    const minutes = leftZero(date.getMinutes());
    const seconds = leftZero(date.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

const date = new Date();
const dateBrazil = formatDate(date);
console.log(dateBrazil);