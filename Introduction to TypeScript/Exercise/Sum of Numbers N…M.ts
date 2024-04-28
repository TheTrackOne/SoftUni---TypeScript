function SumOfNumber() {
    let a:string = window.prompt("Write a number one: ");
    let b:string = window.prompt("Write a number two: ");
  
    let number1:number = parseFloat(a);
    let number2:number = parseFloat(b);
  
    let sum:number = 0;
  
    for (let i = number1; i <= number2; i++) {
      sum += i;
    }
  
    return sum;
  }
  console.log(SumOfNumber());