const obj = {
    [Symbol.for("aaa")]:1
}

console.log(obj[Symbol.for("aaa")]);

for (const Key in obj) {
    console.log(`key = ${key}`);
}