const incr = function (num) {
    return ++num;
}

const decr = function (num) {
    return --num;
}

console.log(incr(10));
const auxs = {incr, decr};

console.log(auxs.decr(10));

function makeCounter(aux) {
    let num = 0;
    return function() {
        num = aux(num);
        return num;
    }
}

const increaser = makeCounter(auxs.incr);
console.log(increaser);