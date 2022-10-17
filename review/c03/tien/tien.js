// bai1
// function ketqua() {
//     let diemTB = 1;
//     diemTB = Number(prompt("Nhap diem cuoi khoa:"));
//     if (diemTB >= 5)
//         console.log("Dau");
//     else console.log("rot");
// }
// ketqua();

// bai2
// function testPowerNumber() {
//     let powerNumber = Number(prompt("Nhap so ban muon"));
//     if ((powerNumber % 10) == 9) {
//         console.log("Yes");
//     }
//     else console.log("No");
// }
// testPowerNumber();

// bai3
// function tamGiacCan() {
//     let a = Number(prompt("nhap chieu dai canh 1")), 
//     b = Number(prompt("nhap chieu dai canh 2")),
//     c = Number(prompt("nhap chieu dai canh 3"));
// if (a == b || b == c || c == a) {
//     console.log("Tam giac can");
// }
// else console.log("tam giac khong can");
// }
// tamGiacCan();

// bai4
// function tienDien() {
//     let kw = Number(prompt("Nhap so dien"));
// if (kw < 100) 
//     console.log("Tien dien cua ban la", kw * 2000);
// else if (kw < 200)
//     console.log("Tien dien cua ban la", kw * 2500);
//     else console.log("tien dien cua ban la", kw * 3500);
// }
// tienDien();

// bai5
// function getTypeLetter() {
//     let x = prompt("Nhap ki tu bat ky");
//     if (typeof x == "number") {
//         console.log("So");
//     }
//     else if (x >= "A" && x <= "Z") {
//         console.log("Hoa");
//             }

//         else if (x >= "a" && x <= "z") {
//             console.log("thuong");
//         }
//             else console.log("Ki tu dac biet");
// }
// getTypeLetter();

// bai6
// function phTrinhBac1() {
//     let a = Number(prompt("nhap so a")), b = Number(prompt("nhap so b"));
//     if (a == 0)
//         if (b == 0) {
//             console.log("Phuong trinh co vo so nghiem");
//         }
//         else console.log("Phuong trinh vo nghiem");
//     else {
//         let x = (-b)/a;
//         console.log("Nghiem cua phuong trinh la", x);
//     }
// }
// phTrinhBac1();

// bai7
// function phTrinhBac2() {
//     let a = Number(prompt("Nhap so a")),
//         b = Number(prompt("Nhap so b")),
//         c = Number(prompt("Nhap so c"));
// if (a == 0) {
//     if (b == 0) {
//         if (c == 0) {
//             console.log("PT co vo so nghiem");
//         }
//         else console.log("PT vo nghiem");
//     }
//     else {
//         x = (-c)/b;
//         console.log("Nghiem cua PT la", x);
//     }
// }
// else {
//     let delta = b**2-4*a*c;
//     console.log("Nghiem so 1 cua PT", (-b+Math.sqrt(delta))/(2*a));
//     console.log("Nghiem so 2 cua PT", (-b-Math.sqrt(delta))/(2*a))
// }
// }
// phTrinhBac2();

// bai8
// function docSoNguyen() {
//     let x = prompt("Nhap so nguyen hai chu so");
//     if (x < 10 || x > 99) {
//         console.log("So khong hop le");
//     }
//     else {
//         let donVi = x % 10; 
//         let chuc = Math.floor(x / 10);
//         switch (chuc) {
//             case 1:
//                 console.log("muoi ");
//                 break;
//             case 2:
//                 console.log("hai muoi");
//                 break;
//             case 3:
//                 console.log("ba muoi");
//                 break;
//             case 4:
//                     console.log("bon muoi");
//                     break;
//             case 5:
//                 console.log("nam muoi");
//                 break;
//             case 6:
//                 console.log("sau muoi");
//                 break;
//             case 7:
//                 console.log("bay muoi");
//                 break;
//             case 8:
//                 console.log("tam muoi");
//                 break;
//             case 9:
//                 console.log("chin muoi");
//                 break;
//         }
//         switch (donVi) {
//             case 1:
//                 console.log("mot");
//                 break;
//             case 2:
//                 console.log("hai");
//                 break;
//             case 3:
//                 console.log("ba");
//                 break;
//             case 4:
//                 console.log("bon");
//                 break;
//             case 5:
//                 console.log("nam");
//                 break;
//             case 6:
//                 console.log("sau");
//                 break;
//             case 7:
//                 console.log("bay");
//                 break;
//             case 8:
//                 console.log("tam");
//                 break;
//             case 9:
//                 console.log("chin");
//                 break;
//         }
//     }
//     }
//     docSoNguyen();

// cần cải thiện: if else có dấu ngoặc {} đầy đủ, trình bày gọn gàng ngay hàng thẳng lối
// bai9
function validate() {
    let d = prompt("nhap ngay");
    let m = prompt("nhap thang");
    let y = prompt("nhap nam");
    let namNhuan = Math.floor(y % 4);
    if (y < 0) {
        console.log("Khong hop le");
    }
    else {
        if (m < 1 || m > 12) {
            console.log("Khong hop le");
        }
        else {
            switch (m) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    if (d >= 1 || d <= 31) {
                        console.log("hop le");
                    }
                    else {
                        console.log("ko hop le");
                    }
                case 2:
                    if (namNhuan == 0) {
                        if (d >= 1 || d <= 29) {
                            console.log("hop le");
                        }
                        else {
                            console.log("Ko hop le");
                        }
                    }
                    else {
                        if (d >= 1 || d <= 28) {
                            console.log("hop le");
                        }
                        else {
                            console.log("Ko hop le");
                        }
                    }
                case 4: case 6: case 9: case 11:
                    if (d >= 1 || d <= 30) {
                        console.log("hop le");
                    }
                    else {
                        console.log("KO hop le");
                    }
            }
        }
    }
}