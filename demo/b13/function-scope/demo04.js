let x = 1;
// let x = 2;

function sayHi() {
    let x = 3;
    console.log(x); // 3
    let y = 7;
    let temp = y;
    if (x > 0) {
        y = 8;
        let x = 4;
        console.log(x); // 4
    }
    y = temp;
    console.log(y); // 8
    console.log(x); // 3
}

console.log(x); // 1
sayHi();