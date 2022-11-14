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

class Teacher {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
    }
}

function main() {
    const s = new Student('Bao', 'Vu', 4.9);
    const t = new Teacher(1, "JavaScript");

    // Hỏi: s có phải là thể hiện (đối tượng) thuộc về lớp Student không?
    // console.log(s instanceof Student);
    console.log(t instanceof Student);
}

main();