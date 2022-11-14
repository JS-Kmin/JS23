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
    const s1 = new Student('Bao', 'Vu', 4.9);
    const s2 = new Student('Ngoc', 'Nguyen', 9.4);

    console.log(s2);
    // const fn1 = s1.getFullName();
    // console.log(fn1);

    // const fn2 = s2.getFullName();
    // console.log(fn2);
}

main();