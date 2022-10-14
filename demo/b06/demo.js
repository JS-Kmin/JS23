// Kiểm tra số nguyên tố
// Input: x là một số nguyên
// Output: Trả về true nếu x là SNT, ngược lại trả về false

function laSNT(x) {
    let dem = 0;
    for (let i = 1; i <= x; i++) {
        // i là ước của x
        if (x % i == 0) {
            dem++;
        }
    }
    if (dem == 2) {
        return true;
    }
    else {
        return false;
    }
}

function bai01() {
    let r = prompt("Nhap so: ");
    let k = laSNT(r); // k sẽ nhận là true (nếu hàm chạy đúng)
    if (k == true) {
        console.log("Day la so nguyen to");
    }
    else {
        console.log("Day khong la so nguyen to");
    }
}

bai01();


