const unique = [1, 3, 3, 5, 5].filter((v, i, self) => {
    console.log(`v = ${v}`);
    console.log(`i = ${i}`);
    console.log(`self = ${self}`);
    console.log("self.indexOf(v)");
    console.log(self.indexOf(v));
    return 1 < v;
});

console.log(unique);
console.log(new Set([1, 3, 3, 5, 5]));