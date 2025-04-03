const a = "a,b,c";
a.aa = 10;
console.log(a.split(','));
console.log(a);

const b = new String('a,b,c');
b.aa = 10;
console.log(b.split(','));
console.log(b);