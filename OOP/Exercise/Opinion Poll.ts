class Person {
    name :string;
    age :number;

    constructor(name :string, age :number) {
        this.name = name;
        this.age = age;
    }

    createPerson() {
        return `${this.name} is ${this.age} years old.`;
    }
}

function getInformation(data :string) :void {
    let arr = data.split(" ");
    const person = new Person (arr[0], Number(arr[1]));
    console.log(person.createPerson());
}
getInformation("Peter 12");