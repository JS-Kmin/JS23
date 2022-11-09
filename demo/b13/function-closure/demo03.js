// const demo = () => {
//     let dem = 0;
//     dem++;
//     console.log(dem);
// }

// demo();
// demo();

// const test = () => {
//     console.log('hello');
//     const con = () => {
//         console.log('con');
//         return 5;
//     }
//     return con;
// }

// const k = test(); // k = con
// console.log(k());

// closure
const demo = () => {
    let dem = 0; // private in this scope
    const tang = () => {
        dem++;
        return dem;
    }
    const giam = () => {
        let dem = -5;
        dem--;
        return dem;
    }
    // giam();
    return [tang, giam];
}

// const tang = demo()[0];
const [tang, giam] = demo();
console.log(tang());
console.log(giam());
console.log(tang());