class Person {
    private name :string;
    constructor(name :string) {
        this.name = name;
    }
    greet() :void {
        console.log(`Hello, my name is ${this.name}`);
    }
}