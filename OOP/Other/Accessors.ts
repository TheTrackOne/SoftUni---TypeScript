const FULL_NAME_MAX_LENGTH :number = 10;

class Employee {
    private _fullName :string;
    
    get fullName() :string {
        return this._fullName;
    }
    set fullName(newName :string) {
        if (newName && newName.length > FULL_NAME_MAX_LENGTH) {
            throw new Error(`fullName has a max length of ${FULL_NAME_MAX_LENGTH}`);
        }
        this._fullName = this.fullName;
    }
}