class Queue {
    constructor(arr = []) {
        this.arr = arr;
    }

    enque(item) {
        this.arr.push(item);
    }

    depue() {
        return this.arr.shift();
    }

    entrise() {
        rerturn [...this.arr]
    }
}
const que = new Queue([10,20,30]);
console.log(que);
que.enque(40);

console.log(que);
const retValue = que.depue();
console.log(retValue);
