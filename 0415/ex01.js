const obj = {
    aa: 10,
};

const map = new Map();
map.set("aa", 10);

console.log(obj);
console.log(map);

console.log(obj.aa);
console.log(map.get('aa'));

obj.bb = 20;
map.set({ aa: 10 }, 20);

console.log(obj);
console.log(map);

console.log(Object.keys(obj).length);
console.log(map.size);