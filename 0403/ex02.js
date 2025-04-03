const isDigit = (str) => {
   return /^\d+$/.test(str);
};

console.log(isDigit('1234'));
console.log(isDigit('123d'));

const isStartString = (str) => {
    return /^{[A-Za-z]/.test(str);
}

console.log(isStartString('abc123'));
console.log(isStartString('123abc'));