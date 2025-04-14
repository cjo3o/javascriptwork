Set.prototype.inSuperSet = function(set) {
    return [...set].every((item) => this.has(item));
};

const setA = new Set([1,2,3,4,5]);
const setB = new Set([2,3]);

console.log(setA.inSuperSet(setB));
console.log(setB.inSuperSet(setA));