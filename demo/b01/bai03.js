let x = prompt("Nhập x: ");
let donVi = x % 10;
let y = Math.floor(x / 10);
let chuc = y % 10;
let z = Math.floor(y / 10);
let tram = z % 10;
console.log("Đơn vị:", donVi);
console.log(chuc);
console.log(tram);

// In ra don vi, chuc, tram