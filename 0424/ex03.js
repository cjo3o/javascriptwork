const test = await fetch('https://github.com/dron512/pwa/blob/main/test.html');

const res = await test.text();
console.log(res);

console.log('dddd');
console.log(test)

function doA() {
    return 'test'
}

console.log(doA());