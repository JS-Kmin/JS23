// if (Điều kiện) {
//     Lệnh sẽ làm nếu điều kiện đúng
// }
// else {
//     Lệnh sẽ làm nếu điều kiện sai
// }

function bai01() {
    let x = 4;
    if (x % 2 == 0) {
        console.log("Chan");
    }
    else {
        console.log("Le");
    }
}
function bai01_C2() {
    let x = 4;
    if (!(x % 2 == 0)) {
        console.log("Le");
    }
    else {
        console.log("Chan");
    }
}

function tamGiacDeu() {
    let a = 5, b = 5, c = 5;
    if (a == b && b == c) {
        console.log("TG deu");
    }
    else {
        console.log("TG khong deu");
    }
}

// De Morgan
!(A && B)
!A || !B

function tamGiacDeu2() {
    let a = 5, b = 5, c = 5;
    if (a != b || b != c || c != a) {
        console.log("TG khong deu");

    }
    else {
        console.log("TG deu");
    }
}

function tamGiacCan() {
    let a = 5, b = 5, c = 5;
    if (a == b || b == c || a == c) {
        console.log("TG can");
    }
    else {
        console.log("TG khong can");
    }
}

function tamGiacCan2() {
    let a = 5, b = 5, c = 5;
    if (a != b && b != c && a != c) {
        console.log("TG khong can");
    }
    else {
        console.log("TG can");
    }
}

function tamGiacVuong() {
    let a = 3, b = 4, c = 5;
    if (a * a == b * b + c * c ||
        b * b == a * a + c * c ||
        c * c == a * a + b * b) {
        console.log("TG vuong");
    }
    else {
        console.log("TG khong vuong");
    }
}

function aSoB() {
    let a = 1, b = 2;
    if (a > b) {
        console.log("a lon hon b");
    }
    else {
        if (a < b) {
            console.log("a be hon b");
        }
        else {
            console.log("a bang b");
        }
    }
}