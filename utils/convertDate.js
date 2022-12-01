
const convertDate = (days = 0, months = 0, years = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + days);
    date.setMonth(date.getMonth() + months);
    date.setFullYear(date.getFullYear() + years);

    let day = date.getDate() + days;
    let month = date.getMonth() + 1 + months;
    let year = date.getFullYear() + years;

    return `${year}-${month}-${day}`;
}

module.exports = convertDate;