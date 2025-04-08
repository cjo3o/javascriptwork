const mysymbol1 = Symbol();
const mysymbol2 = Symbol();

console.log(mysymbol1 === mysymbol2);
console.log(mysymbol1);
console.log(mysymbol2);

console.log(typeof mysymbol1);

String.prototype.aaa = 10;

let a ='abcdef';

console.log(String.prototype.aaa);

a = a.replace(/a/, "aaa");
console.log(a);