const demo = () => {
    let dem = 0;
    const tang = () => {
        dem++;
        return dem;
    }
    console.log(tang());
    console.log(tang());
    console.log(tang());
}

demo();