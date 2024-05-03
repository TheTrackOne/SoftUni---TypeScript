interface Human {
    greet() :string;
}
class person implements Human {
    greet(): string {
        return "Hello there";
    }
}