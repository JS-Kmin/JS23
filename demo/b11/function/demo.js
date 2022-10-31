function test1(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0)
            console.log(a[i]);
    }
}

function test2(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0)
            console.log(a[i]);
    }
}


function test(a, dieuKien) {
    for (let i = 0; i < a.length; i++) {
        if (dieuKien(a[i]) == true)
            console.log(a[i]);
    }
}
test([4, -6, 8, -1], function (value) {
    return value < 0;
});

test([4, -6, 8, -1], (value) => value < 0);