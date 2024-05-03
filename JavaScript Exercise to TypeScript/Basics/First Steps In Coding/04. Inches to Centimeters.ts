function inchesToCentimeters(number :number) :number {
    const INC_TO_CEN :number = 2.54;
    let sum :number = number * INC_TO_CEN;
    return sum;
}
inchesToCentimeters(5);