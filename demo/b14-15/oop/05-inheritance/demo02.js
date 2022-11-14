class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    print() {
        console.log('***');
        console.log(`- First name: ${this.firstName}`);
        console.log(`- Last name: ${this.lastName}`);
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName);
        this.subject = subject;
    }

    print() {
        super.print();
        console.log(`- Subject: ${this.subject}`);
    }
}

function main() {
    const s = new Teacher('Bao', 'Vu', 'JavaScript');
    s.print();
}

main();