const arr = [1, 2, 3, 4, 5];

arr.push(1, 2);

console.log(arr);

arr.unshift(1, 2);
console.log(arr);

const last = arr.pop();
console.log(last);
console.log(arr);

const first = arr.shift();
console.log(first);
console.log(arr);

// map 배열의 내용 바꿈
// reduce 배열을 한개의 자료형 변경
const brr = arr.map((element) => {
    return element * 2;
})

console.log(brr);

const obj = arr.reduce((a, b) => {
    a.name = '홍길동';
    a[b] = a[b] === undefined ? 1 : a[b] + 1;
    return a;
}, {});

console.log(obj);