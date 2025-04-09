const iter = {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    value: 1,
                    done: false
                }
            }
        }
    }
};

const 이터레이터 = iter[Symbol.iterator]();
console.log(이터레이터.next());
console.log(이터레이터.next());
console.log(이터레이터.next());
