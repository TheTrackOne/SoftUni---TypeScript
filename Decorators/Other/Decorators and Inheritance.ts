@ClassDecorator class PersonNew {
    constructor(public name: string) { }
    @enumerable(false) greet() {
    return `Hello ${this.name}`
    }
}

//The Teacher class does not inherit the decorator
    class Teacher extends Person {
    constructor(private subject: string, name: string) {
    super(name);
    }
    introduce() {
    
    }
}
