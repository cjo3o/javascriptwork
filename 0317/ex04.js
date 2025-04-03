try {
    throw new Error('에러ㅏ 발생되면 강제 종료');
} catch (e) {
    console.log(typeof e);
}


console.log('종료되었습니다.');