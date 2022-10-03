const PI = 3.14;

/**
 * Hàm tính chu vi hình tròn
 * @param {number} banKinh Bán kinh hình tròn
 * @returns chu vi của hình tròn
 */
function tinhChuVi(banKinh) {
    return banKinh * 2 * PI;
}

function tinhDienTich(banKinh) {
    return banKinh * banKinh * PI;
}

function chayBai02() {
    let banKinh = Number(prompt("Nhập bán kính đường tròn"));
    let chuVi = tinhChuvi(banKinh);
    console.log("Chu vi", chuVi);

    let dienTich = tinhDienTich(banKinh);
    console.log("Dien tich", dienTich);
}

chayBai02();


