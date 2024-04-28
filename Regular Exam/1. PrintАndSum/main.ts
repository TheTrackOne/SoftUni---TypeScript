function calculateSum(startNumber: number, endNumber: number) : void{
    const numbers : number[] = [];
    let sumNumbers : number = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        numbers.push(i);
        sumNumbers += i;
    }
    
    console.log(numbers.join(" "));
    console.log(`Sum: ${sumNumbers}`);
}

calculateSum(5, 10);
calculateSum(0, 26);
calculateSum(50, 60);