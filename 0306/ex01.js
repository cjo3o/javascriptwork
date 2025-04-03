function solution(my_str, n) {
    console.log(my_str.substring(0, n));
    var answer = [];
    let left = 0;
    let right = n;
    while (true) {
        const result = my_str.substring(left,right);
        if(result.length < 1) {
            break;
        } else {
            answer.push(result);
        }
        left += n;
        right += n;
    }
    return answer;
}

console.log(solution('asdfeqwrebgasdf', 6));