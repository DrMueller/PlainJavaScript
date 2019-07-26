export class Individual {
    _birthdate;

    constructor(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._birthdate = birthdate;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get birthdate() {
        return this._birthdate;
    }

    addDaysToBirthday(days) {
        this._birthdate.setDate(this._birthdate.getDate() + days);
    }
}
