function sayHi() {
    let x = 1;
    if (x > 0) {
        console.log(x); // 1
        let y = 2;
    }
    console.log(y); // Error
}

sayHi();
console.log(x); // Error
