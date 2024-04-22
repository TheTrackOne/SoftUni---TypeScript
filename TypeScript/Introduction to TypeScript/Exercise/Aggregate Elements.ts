const sumNumber = (numbers:number[]):number => {
    let sum:number = 0;

    numbers.forEach((num) => {
        sum += num;
    });

    return sum;
}

const sumInvertedNumber = (numbers:number[]) :number => {
    let sum:number = 0;

    numbers.forEach((num) => {
        sum += (1 / num);
    });

    return sum;
}

const numbersConcat = (numbers:number[]) :string => {
    return numbers.join("");
}

function readArrayNumbers() {
    const arr:number[] = [];
    let input:string = "";

    while ((input = window.prompt("Enter an element (or 'end' to finish): ")) !== "end") {
        const num = parseFloat(input);
        arr.push(num);
    }
    
    return arr;
}

const aggregateElement = (numbers:number[]) :void => {
    const sum:number = sumNumber(numbers);
    const InvertedNum:number = sumInvertedNumber(numbers);
    const concateNumbers:string = numbersConcat(numbers);

    console.log(sum);
    console.log(InvertedNum);
    console.log(concateNumbers);
}

const numbersToUse:number[] = readArrayNumbers();
aggregateElement(numbersToUse);