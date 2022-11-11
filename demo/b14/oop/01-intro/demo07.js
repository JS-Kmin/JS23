class Student {
    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function main() {
    const s1 = new Student();
    console.log(s1);
}

main();