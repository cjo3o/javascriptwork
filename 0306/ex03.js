const child = { a: 10};
const parent = { x:1 };

console.log(child.__prototype__);

child.__prototype__ = parent;

console.log(child.__prototype__);
console.log(child.x);