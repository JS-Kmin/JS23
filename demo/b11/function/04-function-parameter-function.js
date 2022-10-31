function test(a, t) {
    console.log(a);
    t();
}

function demo() {
    console.log('demo');
}

let hihi = function () {
    console.log('hihi');
}
// test(3, hihi);
// test(3, function () {
//     console.log('huhu');
// });

// callback

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function (value) {
    return value * 2;
});

function myFunction(value, index, array) {
    console.log(value, index, array);
    return value * 2;
}

let a = [45, 4, 9];
function mapDemo(myFunction) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        let k = myFunction(a[i], i, a);
        b.push(k);
    }
    return b;
}
console.log(numbers2);

function test1(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0)
            console.log(a[i]);
    }
}

function test2(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0)
            console.log(a[i]);
    }
}


function test(a, dieuKien) {
    for (let i = 0; i < a.length; i++) {
        if (dieuKien(a[i]) == true)
            console.log(a[i]);
    }
}
test([4, -6, 8, -1], function (value) {
    return value < 0;
});

test([4, -6, 8, -1], (value) => value < 0);