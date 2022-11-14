class Student {
    #score; // private => Che chắn, bảo bọc dữ liệu

    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.#score = s;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getScore() {
        return this.#score;
    }

    setScore(newScore) {
        if (newScore >= 0 && newScore <= 10)
            this.#score = newScore;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    console.log(s1.getFullName());
    s1.setScore(7);
    console.log(s1.getScore());
}

main();