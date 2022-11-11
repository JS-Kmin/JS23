class Student {
    static minScore = 5;

    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);

    console.log(s1.minScore);

    console.log(Student.minScore);

    console.log(s1.constructor.minScore);
}

main();