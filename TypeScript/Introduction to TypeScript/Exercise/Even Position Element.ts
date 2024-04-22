function evenElementPositionInArray():string {
    const arr:string[] = [];
    let input:string | null;

    while ((input = window.prompt("Enter an element (or 'end' to finish): ")) !== "end") {
        arr.push(input);
    }

    let result:string = " "; 
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result += arr[i] + " ";
        }
    }

    return result;
}
console.log(evenElementPositionInArray());