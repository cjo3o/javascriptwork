console.log(Math.abs(-5));
console.log(2**3);
console.log(Math.cbrt(27));

console.log(Math.random());

function getNumber(min, max) {
    return Math.trunc(Math.random() * 50)+50
}

for (let i = 0; i < 15; i++) {
    console.log(getNumber(1, 47));
};