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

