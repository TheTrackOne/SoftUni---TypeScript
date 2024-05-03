//TypeScript
class PersonTypeScript {
    private firstName :string;
    constructor(first_name :string) {
        this.firstName = first_name;
    }
    greeting() {
        return `${this.firstName}`;
    }
}


//JavaScript
"use strict"
class PersonJavaScript {
    private firstName;
    constructor(first_name) {
        this.firstName = first_name;
    }
    greeting() {
        return `${this.firstName}`;
    }
}
