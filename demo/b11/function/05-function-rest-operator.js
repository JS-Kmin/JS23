// let person = {
//     age: 18,
//     fullName: "Kmin",
//     address: "HCM"
// }

// person["age"];

// for (let v in person) {
//     console.log(person[v]);
// }

function print(x, y, ...args) {
    console.log("x:", x);
    for (let v in args) {
        console.log(v);
    }
    // for (let i = 0; i < args.length; i++)
    //     console.log(args[i]);
}
// print(4, 6, 9, 8, 4);


function sum(text, ...args) {
    let sum = 0;
    for (let value of args) {
        sum += value;
    }
    console.log(text, sum);
}
sum("Tong", 1, 2, 3);