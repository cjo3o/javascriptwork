// math.random() 1~46까지 중에서 중복되지 않는 숫자 6개


const myset = new Set();
myset.add(1);
myset.add(1);
myset.add(1);
myset.add(2);
myset.add(5);

console.log(myset);
console.log(myset.size);
console.log([...myset]);

const lottoNum = new Set();

do {
    lottoNum.add(Math.ceil(Math.random() * 46));
} while (lottoNum.size != 6);

console.log([...lottoNum]);

// for (let i = 0; i < 6; i++) {
//     console.log(Math.ceil(Math.random() * 46));
// }
