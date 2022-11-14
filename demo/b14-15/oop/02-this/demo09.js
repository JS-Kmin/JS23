class Demo {
    constructor(p = 1) {
        this.p = p;
        this.action = this.action.bind(this);
    }

    action() {
        alert(this.p);
    };
}

function main() {
    const x = new Demo(4);
    const y = new Demo(8);
    const btn = document.getElementById("btn");
    btn.addEventListener("click", x.action);
}

main();