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
    const s2 = new Student('Ngoc', 'Nguyen', 9.4);

    s1.constructor.minScore = 4;
    console.log(s2.constructor.minScore);
    console.log(Student.minScore);
}

main();