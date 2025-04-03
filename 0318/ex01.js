function solution(numbers) {
    let answer = [];
    const myset = new Set();
    for (let i = 0; i < numbers.length; i++) {
        const a = numbers[i];
        for (let j = 0; j < numbers.length; j++) {
            const b = numbers[j];
            if (i !== j) {
                myset.add(a + b);
            }
        }
    }
    answer = [...myset];
    answer.sort((a, b) => a - b);
    return answer;
}

console.log(solution([1, 2, 3]));