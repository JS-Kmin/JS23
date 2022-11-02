function ex1() {
    let a = [];
    for (let i = 1; i < 4; i++) {
        a.push(function () {
            console.log(i);
        });
    }
    return a;
}

const a = ex1();
a[1]();

// for (var i = 0; i < 10; i++) {
//     (function (i) {//IIFE tạo ra một scope khác cho từng i, nên giá trị của i là khác nhau
//         setTimeout(function () {
//             console.log(i);
//         }, 2000);
//     })(i);//biến i ở đây được tạo riêng cho từng IIFE 
// }



