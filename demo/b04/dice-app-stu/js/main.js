/**
 * Lấy số ngẫu nhiên trong đoạn [x, y]
 * @param {number} min chặn dưới
 * @param {number} max chặn trên
 * @returns số ngẫu nhiên
 */
function random(min, max) {
    let r = Math.floor(Math.random() * (max - min)) + min;
    return r;
}
function change() {
    // Lấy elemnt img ...
    let img = document.getElementById("dice-1");

    let k = random(1, 7);
    // Đổi thuộc tính src
    img.src = "./img/dice" + k + ".png";
    // img.src = "./img/dice3.png";
}