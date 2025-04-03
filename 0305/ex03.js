function sum() {
    console.log(arguments);

    let sum = 0;
    for (let i = 1; i < arguments.length; i++) {
        sum += arguments[i];
    }
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));
