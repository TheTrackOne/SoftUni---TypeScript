//Simple Type Alias
type special = number;
let input :special = 123;

//Object Type Alias
type userDataNew = {
    id :number;
    username :string;
    password :number;
    otherData :{
        city :string;
        country :string;
    }
}

const user :userDataNew = {
    id: 1,
    username: "Ivan",
    password: 12345,
    otherData: {
        city: "Sofia",
        country: "Bulgaria"
    }
}

function newUser(userData :userDataNew) {
    return `User ${userData.id} with name: ${userData.username}, that live in ${userData.otherData.city}, ${userData.otherData.country} set password: ${userData.password} to his account.`;
}

console.log(newUser(user))