class Box<T> {
    constructor(public data : T) {}

    toString():string {
        return `${this.data} is of type ${typeof this.data}`;
    }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.toString());