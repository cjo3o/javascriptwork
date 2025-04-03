const todos = [
    { id: 4, content: 'css'},
    { id: 2, content: 'javascript'},
    { id: 1, content: 'html'}
]

todos.sort((a, b) => {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
})

console.log(todos);