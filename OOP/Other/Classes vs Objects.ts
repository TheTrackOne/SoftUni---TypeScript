//Class
class PersonNew {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
    greet() :string {
        return `Hello, I am ${this.name}`;
    }                                                                                                                        
}

//Object
const personOne = new PersonNew("Alice");