function solution(my_string) {
    var comp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const answer = new Array(comp.length).fill(0);
    for (let i = 0; i < comp.length; i++) {
        for (let j = 0; j < my_string.length; j++) {
            if (comp[i] === my_string[j]) {
                answer[i]++;
            }
        }
    }
    return answer;
}

solution('Programmers')