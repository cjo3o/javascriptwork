// [4,3,2,1]    [4,3,2]
// [10]         [-1]

// filter 함수는 return 값이 true 이면 그 요소를 반환
//              return 값이 false 이면 반환하지 않음
// 화살표 함수는 여러줄을 작성이 중괄호 {} 필요
// 중괄호가 {} 들어오게 되면 return 생략 불가

// const result = [10, 20, 30, 40].filter((item, index, arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr);
//     return index !== 3;
// });
// console.log(result);

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);
console.log(arr);

function solution(arr) {
    // 1. 최소값 구하기
    // for forof reduce Math.min
    const min = Math.min(...arr);
    console.log(min);
    const answer = arr.filter((item) => {
        return item !== min;
    })
    if (answer.length === 0) return [-1];
    console.log(answer);
}

console.log(solution([10]));