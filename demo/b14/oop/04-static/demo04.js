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

    static getScore() {
        return this.score;
    }

    check() {
        return this.score >= Student.minScore;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    console.log(Student.getMinScore());
    console.log(Student.getScore());
    console.log(s1.check());
}

main();