class Employees {

    constructor(
        public name:string,
        public code:number
    ) {}

    employeesNew():void {
        console.log(`Name: ${this.name} -- Personal Number: ${this.code}`);
    }
}

function createEmployee(employeeData:string[]) :void {
    employeeData.forEach(employeeInfo => {
        const name:string = employeeInfo;
        const code:number = employeeData.length;
        const employee = new Employees(name, code);
        employee.employeesNew();
    })
}

function readArray() {
    let employeeName:string[] = [];
    let input:string |null;

    while ((input = window.prompt("Enter an element (or 'end' to finish): ")) !== "end") {
        employeeName.push(input);
    }

    return employeeName;
}

const nameEmployee:string[] = readArray();
createEmployee(nameEmployee);