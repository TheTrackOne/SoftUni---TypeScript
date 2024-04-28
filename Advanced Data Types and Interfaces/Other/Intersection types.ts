interface userData {
    username :string | string[];
    password :number;
}
interface userId {
    id :number | string;
}

function userInfo(data: userData & userId) {
    return data;
}

let userData = {
    username: "Ivan",
    password: 12345,
    id: 1
}

console.log(userInfo(userData))

