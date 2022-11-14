let student = {
    firstName: 'Bao',
    lastName: 'Vu',

    demo: function () {
        console.log(this);
    },
};

let student2 = {
    firstName: 'Ngoc',
    lastName: 'Nguyen',
}

function main() {
    // const a = student.demo;
    // a();

    // Bound: Thay đổi ngữ cảnh của this
    // const b = student.demo;
    // const c = b.bind(student2);
    // c();

    // const d = student.demo.bind(student2); // this là student2
    // d();

    // const e = student.demo.bind(student); // this là student
    // e();
}

main();

