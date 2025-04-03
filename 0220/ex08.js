// reduce
// acc 1 num 2
// acc undefined num 3
// acc undefined num 4
// acc undefined num 5

const result = [1, 2, 3, 4, 5].reduce((acc, num) => {
    console.log(acc);
    console.log(num);
    return 10;
});

console.log(result);