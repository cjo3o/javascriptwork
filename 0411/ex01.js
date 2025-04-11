const obj1 = {aa: 10, bb: 20};
const obj2 = {aa: 30, cc: 40};

const result = {...obj1, ...obj2};
console.log(result);