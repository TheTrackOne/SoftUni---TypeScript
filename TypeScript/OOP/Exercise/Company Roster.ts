class Employee {
    constructor(
    public name :string,
    public salary :number,
    public position :string,
    public department :string,
    public email? :string,
    public age? :number
    ) {}
}

class Department {
    constructor (
        public name:string,
        public employees :Employee[] = []
    ) {}

    public getAverageSalary() :number {
        const totalSalary = this.employees.reduce((acc, emp) => acc + emp.salary, 0);
        return totalSalary / this.employees.length;
    }
}

function findHighestAverageSalary(departments: Department[]): Department {
    let highestAvgSalaryDepartment  = departments[0];
    let highestAvgSalary = highestAvgSalaryDepartment.getAverageSalary();

    for (let i = 0; i < departments.length; i++) {
        const avgSalary = departments[i].getAverageSalary();
        if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            highestAvgSalaryDepartment = departments[i];
        }
    }

    return highestAvgSalaryDepartment;
}

function printEmployeesInfo(department :Department) :void {
    const sortedEmployees = department.employees.sort((a, b) => b.salary - a.salary);

    console.log(`Highest Average Salary: ${department.name}`);

    sortedEmployees.forEach(emp => {
        const email = emp.email || "n/a";
        const age = emp.age !== undefined ? emp.age : -1;
        console.log(`${emp.name} ${emp.salary.toFixed(2)} ${email} ${age}`);
    });
}

function main(input :string[]) :void {
    const departments :Department[] = [];

    input.forEach(line => {
        const [name, salaryStr, position, department, email = "n/a", ageStr = "-1"] = line.split(" ");
        const salary = parseFloat(salaryStr);
        const age = parseInt(ageStr);
        const employee = new Employee(name, salary, position, department, email, age);

        const existingDepartment =  departments.find(dep => dep.name === department);
        if (existingDepartment) {
            existingDepartment.employees.push(employee);
        }
        else {
            const newDepartment = new Department(department, [employee]);
            departments.push(newDepartment);
        }
    });

    const departmentWithHighestSalary  = findHighestAverageSalary(departments);
    printEmployeesInfo(departmentWithHighestSalary);
}

const inputInfo: string[] = [
    'John 1000 Manager Sales john@company.com 45',
    'Steven 2000 Manager Sales',
    'Alice 5000 CEO Executive alice@company.com',
    'Bob 1000 Developer IT bob@company.com 25',
    'Jane 2000 HR HR'
];

main(inputInfo);

