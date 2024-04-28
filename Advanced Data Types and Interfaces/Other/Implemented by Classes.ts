interface Car {
    id :number;
    model :string;
    year :number;
    country :string;
}

class CarInfo implements Car {
    id: number;
    model: string;
    year: number;
    country: string;

    constructor(id: number, model: string, year: number, country: string) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.country = country;
    }

    Type() {
        return `The car ${this.id} is ${this.model} made in ${this.year} in ${this.country}. `;
    }
}


const CarInfoNew = new CarInfo(1, "BMW", 2009, "Germany");
console.log(CarInfoNew.Type());
