function Frozen(construtor: Function) {
    Object.freeze(construtor);
    Object.freeze(construtor.prototype);
    }
    @Frozen class Person {
    constructor(private name: string) { }
    }