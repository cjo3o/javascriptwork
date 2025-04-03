var a = NaN;
var b = NaN;

console.log(a);
console.log(a === b);

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

var c = {
    a : 10,
    b () {
        console.log('b함수 입니다.');
    }
}

c.b();