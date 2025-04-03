function outer() {
    let a = 0;
    return function () {
        return a++;
    }
}

const out = outer();
console.log(out());
console.log(out());
console.log(out());
console.log(out());
