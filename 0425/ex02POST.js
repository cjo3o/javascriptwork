fetch('http://localhost:5000/todos', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        todo: "야구표 어쩌구",
        completed: false
    })
})
.then((res) => res.json())
.then(data => {
    console.log(data);
})