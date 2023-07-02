document.querySelector('.Date').addEventListener('change', function () {
    var input = this.value;
    let curDate = new Date();

    let dobdate = new Date(input);

    calculateAge(dobdate, curDate);
})

function calculateAge(dobdate, curDate) {
    let dobday = dobdate.getDate();
    let dobmonth = dobdate.getMonth();
    let dobyear = dobdate.getFullYear();
    let curday = curDate.getDate();
    let curmonth = curDate.getMonth();
    let curyear = curDate.getFullYear();
    let finalDay = (curday > dobday) ? curday - dobday : calculateday(curday, curmonth, curyear) - dobday;
    if (curday < dobday) {
        curmonth -= 1;
    }
    let finalMonth = (curmonth > dobmonth) ? curmonth - dobmonth : calculateMonth(curmonth, curyear) - dobmonth;
    if (curmonth < dobmonth) {
        curyear -= 1;
    }
    let finalyear = curyear - dobyear;
    document.querySelector('.year').innerHTML = finalyear;
    document.querySelector('.month').innerHTML = finalMonth;
    document.querySelector('.day').innerHTML = finalDay;


}
function calculateday(day, month, year) {

    return month === 2 ? leapYear(year) ? 29 + day : 28 + day : month % 2 != 0 || month === 8 ? 31 + day : 30 + day
}

function calculateMonth(month, year) {
    return month + 12;
}
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}