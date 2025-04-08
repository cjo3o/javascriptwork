Array.prototype.sum = function () {
    return this.reduce((a, b) => {
        return a + b;
    }, 0);
};

const arr = [10,20,30];
console.log(arr.sum());