const readline = require('readline-sync');

class HinhChuNhat {
    chieuDai = 2;
    chieuRong = 2;
    constructor(chieuDai = 2, chieuRong = 1) {
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    nhap() {
        this.chieuDai = Number(readline.question('Nhap chieu dai: '));
        this.chieuRong = Number(readline.question('Nhap chieu rong: '));
    }

    tinhDienTich() {
        return this.chieuDai * this.chieuRong;
    }
}

class HinhVuong extends HinhChuNhat {
    constructor(canh) {
        super(canh, canh);
    }

    nhap() {
        const canh = Number(readline.question("Nhap canh: "));
        this.chieuDai = this.chieuRong = canh;
    }
}

function main() {
    const hcn = new HinhChuNhat();
    hcn.nhap();
    console.log(hcn.tinhDienTich());

    const hv = new HinhVuong(4);
    hv.nhap();
    console.log(hv.tinhDienTich());
}

main();