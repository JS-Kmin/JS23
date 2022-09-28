// function
// Định nghĩa
function hello(nameA, nameB) {
    console.log("Hello ", nameA, "and", nameB);
    console.log("Rat vui khi gap ban.");
}

function square(x) {
    let k = x * x;
    return k;
}

function chay() {
    let u = prompt("Nhap gia tri: ");
    let r = square(u); // r nhận giá trị trả về của hàm
    console.log(r);
}

// Gọi hàm
chay();

// hello("Khoa");
// hello("Thu", "Quang");
