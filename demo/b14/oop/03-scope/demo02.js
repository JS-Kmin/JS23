class Student {
    #firstName;
    #lastName;
    #score;

    constructor(fn, ln, s) {
        this.#firstName = fn;
        this.#lastName = ln;
        this.#score = s;
    }

    getFullName() {
        return this.firstName + ' ' + this.#lastName;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    console.log(s1.getFullName());
    s1.score = 5.0;
}

main();