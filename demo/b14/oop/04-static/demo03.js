class Student {
    static minScore = 3;

    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }

    static getMinScore() {
        return Student.minScore;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    console.log(s1.getFullName());
    console.log(s1.getMinScore());
    console.log(Student.getMinScore());
}

main();