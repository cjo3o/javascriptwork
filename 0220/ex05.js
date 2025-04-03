// forEach
// 반환값이 없는 것...
// 콜백함수의 변수명은 개발자가 네이밍 규칙으로 짓는 것

const result1 = [1, 2, 3].forEach((qwer, index) => {
    console.log('hello world' + qwer);
    console.log(`index = ${index}`);
});

// map 1, 2, 3 이기 때문에 3번 돌아가는데 반환되는 값을
// 배열로 만들어 준다.
const result2 = [1, 2, 3].map(qwer=> qwer * 2);
console.log(result2);
