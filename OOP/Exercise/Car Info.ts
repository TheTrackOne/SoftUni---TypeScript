class Car {
    public brand :string;
    public model :string;
    public horsepower :number

    constructor(brand:string, model:string, horsepower:number) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }

    returnInfo() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsepower} HP.`;
    }
}

function getCarInfo(info:string) :void{
    let arr = info.split(" ");
    let car = new Car(arr[0], arr[1], Number(arr[2]));
    console.log(car.returnInfo());
}
getCarInfo("Chevrolet Impala 390");