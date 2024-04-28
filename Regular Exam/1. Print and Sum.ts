function printAndSum(start: number, end :number ) {
let startNumber :number = start;
let endNumber :number = end;
let sumNumber :number = 0;

for (let i = startNumber; i < endNumber; i++) {
    console.log(i);
    sumNumber += i;
}
console.log(`Sum: ${sumNumber}`)
}

printAndSum(5, 10);
