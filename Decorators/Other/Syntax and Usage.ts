function methodDecorator() {
    console.log("Method decorated");
}

class ExampleClass {
    @methodDecorator
    exampleMethod() {

    }
};