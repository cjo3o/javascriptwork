console.log(...[1, 2, 3]);
console.log(...'hello');

const map = new Map([['a', 1], ['b', 2]]);
console.log(map);
console.log(...map);

const set = new Set([1, 2, 3]);
console.log(set);
console.log(...set);

console.log(...{ a:1, b:2 });
console.log({...{ a:1, b:2 }});