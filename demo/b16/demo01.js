const first = () => {
    console.log('first');
    second();
};

const second = () => {
    console.log('second');
};

first();