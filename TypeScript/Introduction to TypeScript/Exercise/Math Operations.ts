function mathOperation() {
    let a:string = window.prompt("Write a number one: ");
    let operator:string = window.prompt("Write the operator:");
    let b:string = window.prompt("Write a number two: ");

    let number1 = parseFloat(a);
    let number2 = parseFloat(b);

    if (operator === "+") {
        return number1 + number2;
    }
    else if (operator === "-") {
        return number1 - number2;
    }
    else if (operator === "*") {
        return number1 * number2;
    }
    else if (operator === "/") {
        return number1 / number2;
    }
    else if (operator === "%") {
        return number1 % number2;
    }
    else if (operator === "**") {
        return number1 ** number2;
    }

}
console.log(mathOperation());