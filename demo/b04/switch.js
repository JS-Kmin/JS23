function vd01() {
    let x = 1;
    switch (x) {
        case 1:
            console.log('mot');
        // break;
        case 2:
            console.log('hai');
        //  break;
        case 3:
            console.log('ba');
            break;
        default:
            console.log('Tui khong biet');
    }

    // let x = 1;
    // if (x == 1) {
    //     console.log('mot');
    // }
    // else if (x == 2) {
    //     console.log('hai');
    // }
}

function vd02() {
    let thang = 3;
    switch (thang) {
        case 1:
        case 3:
        case 5:
            console.log('31 ngay');
            break;
        case 4: case 6:
            console.log('30 ngay');
            break;
    }
}
vd01();