function print(...args) {
    for (let value of args) {
        console.log(value);
    }
}

function sum(text, ...args) {
    let sum = 0;
    for (let value of args) {
        sum += value;
    }
    console.log(text, sum);
}
sum("Tong", 1, 2, 3);