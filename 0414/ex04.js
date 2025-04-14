// 객체 분해
const obj = {a: 10, b: 20};
console.log(obj);

const {a, b} = obj;
console.log(a);
console.log(b);

fetch('https://wummyjson.com/todos')
    .then(data => data.json())
    .then(result)
=>
{
    const {todos} = result;
    console.log(todos);
    const {todo} = todos[0];
    console.log(todo);
}