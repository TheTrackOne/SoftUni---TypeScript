function sortAndExcractSecondHalf(input :number[]) {
    const sortedArray = input.sort((a, b) => a - b);

    const startIndex = Math.ceil(sortedArray.length / 2);

    const secondHalf = sortedArray.slice(startIndex);

    return secondHalf;
}

function readArray() {
    const arr:number[] = [];
    let input:string | null;

    while ((input = window.prompt("Enter an element (or 'end' to finish): ")) !== "end") {
        const num = parseFloat(input);
        arr.push(num);
    }
    
    return arr;
}

const result:number[] = readArray();
console.log(sortAndExcractSecondHalf(result));