const obj = {
    value: 10,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.value
        }
        if (hint === 'string') {
            return this.value
        }
    },
    [Symbol.iterator]() {
        return {
            next() {
                return {value: 1, done: false}
            }
        }
    }
}

console.log(obj);
console.log(+obj);
console.log(`${obj}`);

console.log(obj[Symbol.iterator]().next());