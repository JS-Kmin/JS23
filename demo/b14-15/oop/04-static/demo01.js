

class Student {
    static minScore = 5; // Thuoc tinh dung chung cho cac doi tuong thuoc class nay

    constructor(fn, ln, s) {
        this.firstName = fn;
        this.lastName = ln;
        this.score = s;
    }
}

function main() {
    const s1 = new Student('Bao', 'Vu', 4.9);
    const s2 = new Student('A', 'Nguyen', 9.4);

    Student.minScore = 3; // Truy xuat den thanh phan staic thong qua ten lop
    console.log(s1.constructor.minScore); // Truy xuat den thanh phan staic thong qua object

    s1.constructor.minScore = 6; // Doi thuoc tinh static thanh 6
    console.log(s2.constructor.minScore);

    // score cua s1 va s2 khac nhau
    // s1.score = 7;
    // console.log(s2.score);


    // console.log(s1.minScore);

    // console.log(Student.minScore);

    // console.log(s1.constructor.minScore);
}

main();