class Fraction {
    #tu = 0;
    #mau = 1;

    constructor(tu = 0, mau = 1) {
        this.#tu = tu;
        this.#mau = mau;
    }

    print() {
        console.log(`${this.#tu}/${this.#mau}`);
    }

    getTu() {
        return this.#tu;
    }

    get tu() {
        return this.#tu;
    }

    setTu(t) {
        this.#tu = t;
    }

    set tu(t) {
        this.#tu = t;
    }

}

function main() {
    const p = new Fraction(1, 4);
    p.print();
    console.log(p.getTu());
    console.log(p.tu);
    p.tu = 3;
    p.setTu(3);
}

main();