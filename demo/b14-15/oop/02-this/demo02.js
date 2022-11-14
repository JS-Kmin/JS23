class Student {
    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }

    demo() {
        console.log(this);
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    const s2 = new Student('Ngoc', 'Nguyen', 9.4);

    s1.demo();
    s2.demo();
}

main();