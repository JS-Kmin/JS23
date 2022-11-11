class Student {
    #firstName;
    #lastName;
    #score;

    constructor(fn, ln, s) {
        this.#firstName = fn;
        this.#lastName = ln;
        this.#score = s;
    }

    get firstName() {
        return this.#firstName.toUpperCase();
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get score() {
        return this.#score;
    }

    set score(score) {
        if (score >= 0 && score <= 10) {
            this.#score = score;
        }
    }

    getFullName() {
        return this.#firstName + ' ' + this.#lastName;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);

    const a = s1.score;
    console.log(`Điểm của ${s1.firstName} là: ${a}`);

    // s1.score(15); // Error
    s1.score = 15;
    console.log(`Điểm sau khi cập nhật: ${s1.score}`);
}

main();