function calculate() {
    let a:string = window.prompt("Write a number one: ");
    let b:string = window.prompt("Write a number two: ");

    let num1:number = parseFloat(a);
    let num2:number = parseFloat(b);

    let sum:number = num1 * num2;

    return sum;
}
console.log(calculate());