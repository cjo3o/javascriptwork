const setting = {
    theme: null,
    language: 'ko',
    person : {
        name: '홍길동'
    }
}

console.log(Boolean(null));

const userTheme = setting.theme || 'light';
console.log(userTheme);

const userLanguage = setting?.language;
console.log(userLanguage);

const userName = setting.person.name;
console.log(userName);