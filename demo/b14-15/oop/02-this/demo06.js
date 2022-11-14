class Demo {
    constructor(p = 1) {
        this.p = p;
    }

    action() {
        console.log(this);
    };
}

function main() {

    const x = new Demo();
    const a = x.action;
    a();
}

main();