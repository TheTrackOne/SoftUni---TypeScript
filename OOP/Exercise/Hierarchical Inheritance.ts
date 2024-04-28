class Animal {
    public eat() :void {
        console.log("eating…");
    }
}

class Cat extends Animal {
    public meow() :void {
        console.log("meowing…");
    }
}

class Dog extends Animal {
    public bark() :void {
        console.log("barking…");
    }
}

const dog = new Dog();
dog.bark();
dog.eat();