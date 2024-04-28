function FindBiggerNumber() {
    let a:string = window.prompt("Write a number one: ");
    let b:string = window.prompt("Write a number two: ");
    let c:string = window.prompt("Write a number three: ");

    let num1:number = parseFloat(a);
    let num2:number = parseFloat(b);
    let num3:number = parseFloat(c);

    let max:number = Math.max(num1, num2, num3);

    return max;
}
console.log(FindBiggerNumber());