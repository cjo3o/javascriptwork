const infiniteFibona = (function() {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur};
        }
    }
})();

console.log(infiniteFibona);