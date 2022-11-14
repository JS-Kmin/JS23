class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    print() {
        console.log("Cha");
        // console.log('***');
        // console.log(`- First name: ${this.firstName}`);
        // console.log(`- Last name: ${this.lastName}`);
    }
}
// Teacher (con) la mot truong hop dac biet cua Person (cha)
class Teacher extends Person {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName);
        this.subject = subject;
    }

    print() {
        console.log("Con");
        super.print();
        console.log(`- Subject: ${this.subject}`);
    }

    test() {
        console.log(this.firstName);
    }
}

function main() {
    const t = new Teacher('Bao', 'Vu', 'JavaScript');
    t.print();
}

main();