class DogFromAnimal { // Class initialization
    // Class properties
    private name :string;
    private age :number;

    // Class constructor
    constructor(name :string, age :number) {
        this.name = name;
        this.age = age;
    }

    // Class method
    bark() :string {
        return `${this.name} woofed friendly`
    }
}
let tommy = new DogFromAnimal('Tommy', 6);

console.log(tommy);
console.log(tommy.bark());