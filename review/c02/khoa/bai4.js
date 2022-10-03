let x = Number(prompt("Nhập số lượng"));
let y = Number(prompt("Nhập đơn giá"));
function price(quantity, unitprice) {
    return quantity * unitprice
};
let a = price(x,y);
console.log("Tiền =", a)
function vat(number) {
    return number * 10 / 100
};
let b = vat(a)
console.log("Thuế giá trị gia tăng =", b)