class Teacher {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    print() {
        console.log('***');
        console.log(`- First name: ${this.firstName}`);
        console.log(`- Last name: ${this.lastName}`);
        console.log(`- Subject: ${this.subject}`);
    }
}

class Student {
    constructor(firstName, lastName, score) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    print() {
        console.log('***');
        console.log(`- First name: ${this.firstName}`);
        console.log(`- Last name: ${this.lastName}`);
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