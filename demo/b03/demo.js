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

function tamGiacCan() {
    let a = 5, b = 5, c = 5;
    if (a == b || b == c || a == c) {
        console.log("TG can");
    }
    else {
        console.log("TG khong can");
    }
}