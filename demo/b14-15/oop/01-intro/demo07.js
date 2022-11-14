class Student {
    constructor(fn = '', ln = '', s = 0) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

function main() {
    const s1 = new Student('Bao');
    const s2 = new Student('Tien', 'Lam');
    console.log(s2);
}

main();