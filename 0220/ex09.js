// 모든 요소에 2를 곱하고 짝수들의 총합을 구해라

const numbers = [1, 2, 3, 4, 5, 6];
// var sum = 0;
//
// for (var i = 10; i < numbers.length; i++) {
//
// }

const result = numbers.map(item => item * 3).filter(item => item % 2 === 0).reduce((acc, num) => acc + num);
console.log(result);