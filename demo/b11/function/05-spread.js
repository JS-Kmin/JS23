let person = {
    age: 18,
    fullName: "Kmin",
    address: "HCM",
    other: {
        height: 180,
        weight: 60
    }
}

// let a = person.age;
// let b = person.fullName;
// let c = person.address;

// let arr = [1, 2, 3, 4]
// let [a, x, ...b] = arr; // destructoring

let { age, fullName, other } = person;
// let age = person.age;
// let other = person.other;

// let { height, weight } = other;

other.height = 100;
age = 20;
console.log(person);


// let x = { ...person };
// // let x = person;
// x.age = 20;
// console.log(person);