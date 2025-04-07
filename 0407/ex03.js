const dayjs = require('dayjs');

const now = dayjs*();
const 내년 = dayjs(now)add(1,'year');
console.log(내년.format('YYYY-MM-DD'));

const 다음달 = dayjs(now).add(1, 'month');
console.log(다음달.format('YYYY-MM-DD'));

const 저번달 = dayjs(now).add(-1, 'month');
console.log(저번달.format('YYYY-MM-DD'));

const 마지막날 = dayjs(now).endOf('month').date();
console.log(마지막날);