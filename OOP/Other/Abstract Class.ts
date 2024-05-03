abstract class Department {
    public depName :string;
    constructor(name:string) {
        this.depName = name;
    }
    abstract sayHello() :void;
}

class Engineering extends Department {
    public employee :string;
    constructor(depName :string, e :string) {
        super(depName);
        this.employee = e;
    }
    sayHello(): string {
        return '${this.employee} of ${this.depName} department says hi!';
    }
}
let dep = new Department('Test'); //Cannot create instance of abstract class