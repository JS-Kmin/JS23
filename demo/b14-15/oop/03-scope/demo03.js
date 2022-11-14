class Student {
    #firstName;
    #lastName;
    #score;

    constructor(fn, ln, s) {
        this.#firstName = fn;
        this.#lastName = ln;
        this.#score = s;
    }

    getFirstName() {
        return this.#firstName.toUpperCase();
    }

    setFirstName(firstName) {
        this.#firstName = firstName;
    }

    getScore() {
        return this.#score;
    }

    setScore(score) {
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

    const a = s1.getScore();
    console.log(`Điểm của ${s1.getFirstName()} là: ${a}`);

    s1.setScore(15);
    console.log(`Điểm sau khi cập nhật: ${s1.getScore()}`);
}

main();