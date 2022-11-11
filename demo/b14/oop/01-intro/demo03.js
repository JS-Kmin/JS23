function createStudent3(firstName, lastName) {
    return {
        firstName,
        lastName,

        getFullName() {
            return this.firstName + ' ' + this.lastName;
        }
    };
}
let y = createStudent3('Ngoc', 'Nguyen');
y.getFullName();