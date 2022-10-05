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
// !(A && B)
// !A || !B

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

function soDienTieuThu() {
    let x = Number(prompt("Nhập số kw điện"));
    if (x < 100)
        return x * 2000;
    else if (x < 200)
        return x * 2500;
    else
        return x * 3500;

}
// let y = soDienTieuThu();
// console.log(y);

function ptb1() {
    let a = 5, b = 3;

    if (a == 0)
        if (b == 0)
            console.log("VSN");
        else
            console.log("VN");
    else
        console.log("Nghiem:", -b / a);
}

function inSoAm() {
    let a = -1, b = 2, c = -3;
    if (a < 0)
        console.log(a);
    if (b < 0)
        console.log(b);
    if (c < 0)
        console.log(c);
}
function tinhTongAm() {
    let a = -1, b = 2, c = -3;

    let s = 0;
    if (a < 0)
        s += a; // s = -1
    if (b < 0)
        s += b; // s = -1 + 2 = 1 (a+b)
    if (c < 0)
        s += c; // s = 1 + (-3) = -2 (a+b+c)

    console.log(s);
}

function demSoAm() {
    let a = -1, b = 2, c = -3;

    let dem = 0;
    if (a < 0)
        dem++;
    if (b < 0)
        dem++;
    if (c < 0)
        dem++;

    console.log(dem);
}

function maxNumber() {
    let a = -1, b = 2, c = 0;

    let max = a;

    if (b > max)
        max = b;
    if (c > max)
        max = c;
}

function phanBietKyTuVaSo() {
    let input = '/';

    if (typeof input === 'number') {
        console.log('So');
    } else {
        if (input >= 'a' && input <= 'z') {
            console.log('chu THUONG');
        } else if (input >= 'A' && input <= 'Z') {
            console.log('chu HOA');
        } else {
            console.log('ky tu dac biet');
        }
    }
}

phanBietKyTuVaSo();