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
    // if (dem == 2)
    //     return true;
    // else
    //     return false;

    return dem == 2;
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

function test() {
    for (let x = 1; x <= 3; x++) {
        for (let y = 5; y <= 6; y++) {
            console.log(x, y);
        }
    }
}

function inSNT(m, n) {
    for (let i = m; i <= n; i++) {
        let dem = 0;
        for (let t = 1; t <= i; t++) {
            // i là ước của x
            if (i % t == 0) {
                dem++;
            }
        }
        if (dem == 2)
            console.log(i);
    }
}

function inSNT2(m, n) {
    for (let i = m; i <= n; i++) {
        let k = laSNT(i);
        if (k == true)
            console.log(i);
    }
}

function inSNTTrongMang(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (laSNT(arr[i]) == true)
            console.log(arr[i]);
    }
}

function bai02() {
    let x = [4, 7, 2, 8, 1];
    inSNTTrongMang(x);
}

function timViTriAmDau(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            return i;
    }
    return -1; // Khong co so am
}

function timMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

function timAmMax(arr) {
    let k = timViTriAmDau(arr);

    if (k == -1)
        return 0; // Khong co so am

    let max = arr[k];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && arr[i] > max)
            max = arr[i];
    }
    return max;
}

function bai03() {
    let x = [3, 7, 1, 9, 4];
    let m = timAmMax(x);
    if (m == 0) {
        console.log("Khong co so am");
    }
    else {
        console.log("So am lon nhat la:", m);
    }
}
bai03();

