class Cat {

    constructor(
        public name:string, 
        public age:number
    ) {}

    meow():void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catData:string[]):void {
    catData.forEach(catInfo => {
        const[name, ageStr] = catInfo.split(" ");
        const age = parseInt(ageStr);
        const cat = new Cat(name, age);
        cat.meow();
    })
}

function readArray() {
    let catNameAndAge:string[] = [];
    let input:string | null;

    while ((input = window.prompt("Enter an element (or 'end' to finish): ")) !== "end") {
        catNameAndAge.push(input);
    }
   
    return catNameAndAge;
}

const nameAndAge:string[] = readArray();
createCats(nameAndAge);