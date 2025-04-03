const obj = {name: 'John'};

const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc);

Object.defineProperty(obj, 'age', {
    value : 20,
    writable: true,
    enumerable: false,
    configurable: false
})

console.log(obj.name);
console.log(obj.age);

for(const key in obj) {
    console.log(key);
}