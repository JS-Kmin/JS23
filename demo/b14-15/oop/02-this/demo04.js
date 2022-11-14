let student = {
    firstName: 'Bao',
    lastName: 'Vu',

    demo: function () {
        console.log(this);
    },
    demo2: function (a, b) {
        console.log(this);
        console.log(a, b);
    }
};

let student2 = {
    firstName: 'Ngoc',
    lastName: 'Nguyen',
}

function main() {
    // this là student2
    student.demo.call(student2);
    student.demo.apply(student2);

    student.demo2.call(student2, 1, 2);
    student.demo2.apply(student2, [1, 2]);
}

main();
