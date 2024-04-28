class Generics<T> {
    constructor(private data :T[]) {}

    compare(comprator : T) :number{
        let count = 0;
        this.data.forEach(element => {
            if (element === comprator) {
                count++;
            }
        });

        return count;
    }
}

const stringArray = new Generics<string>(["apple", "banana", "apple", "orange"]);
console.log(stringArray.compare("apple"));