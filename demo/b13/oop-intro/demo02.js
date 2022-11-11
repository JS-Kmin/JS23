// Factory function

function createStudent() {
    return {
        id: 1,
        fullName: 'Vu Dinh Bao',
        score: 4.9,
    };
}

function createStudent2(id, fn, s) {
    return {
        id: id,
        fullName: fn,
        score: s,
    };
}

function createStudent3(firstName, lastName, score) {
    return {
        firstName,
        lastName,
        score,
    };
}

function main() {
    let a = createStudent2(3, 'Khoa', 8);
    console.log(a);
    // let x = createStudent3('Bao', 'Vu', 4.9);
    // console.log(x);

    // let y = createStudent3('Ngoc', 'Nguyen');
    // console.log(x)
}

main();
