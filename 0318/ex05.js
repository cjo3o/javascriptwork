const arr = new Array(3);
console.log(arr);

Array.from(new Array(3), (a, b) => {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
})

const funcs = Array.from(arr, (_, i) => () => i);

console.log(funcs);

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());