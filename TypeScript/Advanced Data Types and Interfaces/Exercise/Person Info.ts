interface PersonInformation {
    first_name: string;
    last_name: string;
    age: number;
}

function createPerson(first_name: string, last_name: string, age: string): PersonInformation {
    const realAge = parseInt(age);
    const person: PersonInformation = {
        first_name: first_name,
        last_name: last_name,
        age: realAge
    };
    return person;
}

const person = createPerson("Kadir", "Yusein", "20");
console.log(person);
