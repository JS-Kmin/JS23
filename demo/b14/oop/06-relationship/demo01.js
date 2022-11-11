class A {
    constructor() {
        console.log('Khoi tao A');
    }
}

class B {
    constructor() {
        console.log('Khoi tao B');
        this.a = new A();
    }
}

function main() {
    const b = new B();
}

main();