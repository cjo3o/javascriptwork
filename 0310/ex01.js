function solution(str_list) {
    var answer = [];
    for (var i = 0; i < str_list.length; i++) {
        if (str_list[i] === 'l') {
            console.log(str_list.slice(0, i));
            answer += str_list.slice(0, i);
            console.log(answer);
        }
        if (str_list[i] === 'r') {
            console.log(str_list.slice(i + 1, str_list[str_list.length - 1]));
            answer += str_list.slice(i + 1, str_list[str_list.length - 1]);
            console.log(answer);
        }
    }
    if (answer.length > 0) {
        return answer.split(',');
    } else {
        return answer = [];
    }
}

console.log(solution(["r", "u", "u"]));