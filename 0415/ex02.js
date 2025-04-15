const map = new Map();
map.set('key1', 'value1');
map.set('key1', 'aaaa');
console.log(map);

for (const element of map) {
    console.log(element);
}

map.forEach ((value, key) => {
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
})