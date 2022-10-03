let cauThu = {
    ten: "",
    soAo: 0,
    kyNang: {
        sut: 0,
        chuyen: 0,
        danhDau: 0
    }
};

function nhapCauThu() {
    cauThu.ten = prompt("Nhap ten: ");
    cauThu.soAo = Number(prompt("Nhap so ao: "));
}

function xuatCauThu() {
    console.log("Ten: ", cauThu.ten);

}

nhapCauThu();
xuatCauThu();