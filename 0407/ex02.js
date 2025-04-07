console.log(new Date());
console.log(new Date(2025,2,13));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());

now.setMonth(2);
console.log(now);

now.setDate(0);
console.log(now);

console.log(Date.now());
console.log(new Date());
