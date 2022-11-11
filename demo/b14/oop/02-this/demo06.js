class Demo {
    constructor(p = 1) {
        this.p = p;
    }

    action() {
        console.log('this is:', this);
    };
}

function main() {

    const x = new Demo();
    const a = x.action;
    a();
}

main();