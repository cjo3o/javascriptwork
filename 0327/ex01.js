const arr = [1,2,3,4,5];

console.log(arr.slice(0,2));
console.log(arr.slice(2,4));

function doA() {
    const a = '10';
    const b = a;

    const arr = [...arguments];
    const brr = arr;

    const crr = [...arr];

    console.log('arr === brr');
    console.log(arr === brr);

    console.log('arr === crr');
    console.log(arr === crr);
    console.log(...arguments);
    const result = [...arguments].map((item) => {
        console.log(item);
    })
    console.log(result);
}

doA(1,2,3,4);