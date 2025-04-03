const numbers = [1,2,3,4,5];

function doA(){
    const ret = numbers.reduce((a, b) => {
        console.log(a);
        console.log(b);
        return a + b;
    }, 0)
};

const ret = numbers.reduce((a, b) => {
    console.log(a);
    console.log(b);
    return 10;
}, 0)

console.log(`ret ${ret}`);