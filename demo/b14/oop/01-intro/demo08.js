class Student {
    constructor(fn = "", ln = "", s = 0) {
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
    const s2 = new Student('Bao', 'Vu');
    const s3 = new Student('Bao');

    console.log(s1);
    console.log(s2);
    console.log(s3);

}

main();