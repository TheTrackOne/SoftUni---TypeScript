//Private
class UserDetailsForLogin {
    private email :string;
    private password :string;

    constructor (email :string, password :string) {
        this.email = email;
        this.password = password;
    }
}

//Readonly
class UserDetailsAboutAddress {
    readonly town :string;
    readonly country :string;

    constructor (town :string, country :string) {
        this.town = town;
        this.country = country;
    }
}

//Protected
class UserDetails {
    protected firstName :string;
    protected lastName :string;

    constructor (firstname :string, lastName :string) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
}

//Public 
class User {
    public username :string;
    public followers :number;
    
    constructor (username :string, followers :number) {
        this.username = username;
        this.followers = followers;
    }
}