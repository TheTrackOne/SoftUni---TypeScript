interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}
  
interface Actions<T> {
sellCar(dealerID: T, model: T): void;
}
  
class CarDealership<T> implements Dealership<T>, Actions<T> {
    public soldCars: number = 0;
    public modelsSold: { [key: string]: T } = {};
  
    constructor(public dealershipName: T) {}
  
    sellCar(dealerID: T, model: T): void {
      this.modelsSold[dealerID.toString()] = model;
      this.soldCars++;
    }
  
    showDetails(): string {
      let details = `${this.dealershipName}:\n`;
      for (const dealerID in this.modelsSold) {
        details += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
      }
      return details;
    }
}
  

const dealership = new CarDealership<string>("SilverStar");
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
  