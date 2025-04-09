const isIterable = v => {
    return v !== null;
}

console.log(isIterable([]));
console.log(new Map());
console.log(new Set());
console.log(isIterable({}));