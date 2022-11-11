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

class Student extends Person {
    constructor(firstName, lastName, score) {
        super(firstName, lastName);
        this.score = score;
    }

    print() {
        super.print();
        console.log(`- Score: ${this.score}`);
    }
}

function main() {
    const s = new Student('Bao', 'Vu', 9);
    s.print();

    const t = new Teacher('Ngoc', 'Nguyen', 'JavaScript');
    t.print();
}

main();