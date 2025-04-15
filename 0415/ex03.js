const map = new Map();
const key = {key: 10};

// map에
map.set(key, 20);
console.log(map);

console.log(map.has(key));

map.delete(key);
console.log(map);

map.set(NaN, 100);
console.log(map);

map.clear();
console.log(map);