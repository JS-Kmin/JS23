// add là một function expression
const add = (function () { // -> anonymous function
    let counter = 0;
    return function () { counter += 1; return counter } // add là function này, dùng được counter khai báo ở scope cha, counter trở thành biến "private" của add
})(); // self-invoking function

// counter không bị reset sau mỗi lần gọi add
add();
add();
add();

/**
 * ĐÚC KẾT
 * A closure is a function having access to the parent scope, even after the parent function has closed.
 */