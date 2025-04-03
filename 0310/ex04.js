function Person() {

}

const me = new Person();
const parent = {};

Object.setPrototypeOf(me, parent);

console.log(me instanceof Person);
console.log(me instanceof Object
);