function add(x, y) {
    if(typeof x !== 'number') {
        x = 0;
    }
    if (typeof y !== 'number') {
        y = 0;
    }
    return x+y;
}

console.log(add(2));
console.log(add('a', 'b'));
