class Computer {
    public RAM :number;

    constructor (r :number) {
        this.RAM = r;
    }

    showParams() :string {
        return `${this.RAM}`;
    }
}

interface Parts extends Computer {
    CPU :string;
    showParts() :string;
}

class PS extends Computer implements Parts {
    public keyboard;
    public CPU;

    constructor (RAM :number, CPU :string) {
        super(RAM);
        this.CPU = CPU;
    }
    showParts() {
        return `${this.RAM} ${this.CPU}`;
    }
}