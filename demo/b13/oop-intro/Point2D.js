const readline = require('readline-sync');

class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    scan() {
        this.x = Number(readline.question("Nhap hoanh do: "));
        this.y = Number(readline.question("Nhap tung do: "));
    }

    getDistance(point) {
        return point.x + this.x;
    }
}

function main() {
    let p1 = new Point2D();
    p1.scan();

    let p2 = new Point2D();
    p2.scan();

    const d = p1.getDistance(p2);
    console.log(d);

    // console.log(p.scan())

}

main();