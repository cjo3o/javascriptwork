const obj = {
    foo() {},
    arrow : () => {},
    bar : function (){}
}

console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.arrow.hasOwnProperty('prototype'));
console.log(obj.bar.hasOwnProperty('prototype'));