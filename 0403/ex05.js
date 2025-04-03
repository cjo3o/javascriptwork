// front 에서는 back서버에서 만들어준걸 사용
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
        console.log(res);
        if (res.status.toString().startsWith('2')) {
            console.log('정상');
            return res.json();
        } else {
            console.log('주소 잘못됨' + res.status);
            throw new Error('에러입니다.');
        }
    })
    .then(json => {

    })
    .catch(e => {
        console.log(e);
    })