fetch('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1165')
    .then(text => {
        console.log(text);
        return text.json();
    })
    .then(json => {
        console.log(json);
    })