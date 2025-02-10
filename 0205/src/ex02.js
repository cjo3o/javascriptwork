const a = "큰 따옴표안에 \"작은 따옴표\"";
console.log(a);
const b = '작은 따옴표안에 "큰 따옴표"';
console.log(b);

const c = `a = ${a} b = ${b}`;
console.log(c);

const  d = "a = "+a + "b = " + b;
console.log(d);

//f2 에러 찾아가기
//ctrl + alt + l 자동완성
//alt + 1 왼쪽탐색기영역으로
//alt + f12 터미널
//esc 에디터 창으로 가기
//alt + insert 파일 생성