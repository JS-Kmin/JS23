// ES5
var test = function (x, y) {
  return x * y;
}

// ES6
const test1 = (x, y) => x * y;

const test2 = () => console.log("hello arrow function");

test2();
/**
 * Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always a constant value.
 */