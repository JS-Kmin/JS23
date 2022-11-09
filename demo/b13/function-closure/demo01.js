let dem = 5;

// function test(a) {
//     return a*a
// }

// const test = (a) => a*a;

const tang = () => {
    dem++; // dem = 2
    return dem;
}

console.log(tang()); // 1
console.log(tang()); // 2
console.log(tang()); // 3

