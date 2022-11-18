function a() {
    console.log('a');
    b();
    console.log('End a');
}

function b() {
    console.log('b');
}


function c() {
    console.log('c');
    setTimeout(() => {
        console.log('Timeout 1');
        for (let i = 0; i < 10000000000; i++); // delay
    }, 1);
    setTimeout(() => console.log('Timeout 2'), 2);
    for (let i = 0; i < 10000000000; i++); // delay
    console.log('end c');
}

c();
a();