function greet(input: string | string[]) {

    if(typeof input === "string") {
        return input;
    }
    return input.join('')
}
let text :string = "Hello World";
console.log(greet(text));