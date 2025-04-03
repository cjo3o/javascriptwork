const str1 = "1234";
const str2 = "abcd";
const str3 = "12cd";

const re = /^[\d]+$/;

console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));