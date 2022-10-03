let x = Number(prompt("Nhập tổng số giây"))
function hour(number) {
    return number / 3600
}
let a = hour(x)
console.log("giờ =", a)
function minute(number) {
    return number / 60
}
let b = minute(x)
console.log("phút =", b)