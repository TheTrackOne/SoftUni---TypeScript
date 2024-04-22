interface CalorieObject {
    [foodName :string] :number;
}

function composeCalorieObject(input:string[]) :CalorieObject {
    const calorieObject :CalorieObject = {};

    for (let i = 0; i < input.length; i += 2) {
        const foodName:string = input[i];
        const calories:number = Number(input[i+1]);
        calorieObject[foodName] = calories;
    }

    return calorieObject;
}

const input :string[] = ["apple", "52", "banana", "89", "chocolate", "546"];
const result = composeCalorieObject(input);
console.log(result);