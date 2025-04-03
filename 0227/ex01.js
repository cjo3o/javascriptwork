function solution(my_string) {
    // 모음 목록
    const vowels = 'aeiou';
    let result = '';

    // 문자열의 각 문자에 대해 반복
    for (let i = 0; i < my_string.length; i++) {
        let isVowel = false; // 현재 문자가 모음인지 여부

        // 현재 문자가 모음 목록에 있는지 확인
        for (let j = 0; j < vowels.length; j++) {
            if (my_string[i] === vowels[j]) {
                isVowel = true; // 모음이면 true로 설정
                break; // 더 이상 확인할 필요 없음
            }
        }

        // 현재 문자가 모음이 아닌 경우 결과 문자열에 추가
        if (!isVowel) {
            result += my_string[i];
        }
    }

    return result; // 모음이 제거된 문자열 반환
}

// 예시 사용
console.log(solution("hello world")); // "hll wrld"
console.log(solution("aeiou")); // ""
console.log(solution("programming")); // "prgrmmng"
