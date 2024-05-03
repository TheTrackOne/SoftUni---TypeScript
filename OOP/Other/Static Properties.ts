class Manufacturing {
    public maker :string; 
    public model :string;
    public static vehiclesCount = 0;

    constructor(maker :string, model :string) {
        this.maker = maker;
        this.model = model;
    }
    createVehicles() {
        Manufacturing.vehiclesCount++;
        return `Created cars: ${Manufacturing.vehiclesCount} of ${this.maker} ${this.model}`;
    }

}