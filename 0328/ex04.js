const arr = ['aa', 'bb', 'cc'];

class AA {
    constructor(pre) {
        this.pre = pre;
    }
    add(arr) {
        return arr.map((item) => {
            return `${this.pre}-${item}`;
        })
    }
}

const aa = new AA('webkit');
const prearr = aa.add(arr);
console.log(prearr);

// const result = arr.map((item) => {
//     return `webkit-${item}`;
// })
//
// console.log(result);