class Student {
    constructor(fn, ln, s) {
        // public
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    s1.score = -9;
    console.log(s1);
}

main();