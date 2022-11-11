class A {
    constructor() {
        console.log('Khoi tao A');
    }
}

class B extends A {
    constructor() {
        console.log('Khoi tao B');
        super();
    }
}

function main() {
    const b = new B();
}

main();