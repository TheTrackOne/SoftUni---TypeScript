function daysOfTheWeek() {
    let a:string = window.prompt("Write a number: ");

    let number:number = parseFloat(a);

    if (number === 1) {
        return "Monday";
    }
    else if (number === 2) {
        return "Tuesday";
    }
    else if (number === 3) {
        return "Wednesday";
    }
    else if (number === 4) {
        return "Thursday";
    }
    else if (number === 5) {
        return "Friday";
    }
    else if (number === 6) {
        return "Saturday";
    }
    else if (number == 7) {
        return "Sunday";
    }
    else {
        return "error";
    }
}
console.log(daysOfTheWeek());