fetch('https://dummyjson.com/todos', { method: "post"})
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data, null, 2)));

// const axios = require('axios');
// axios.get('https://dummyjson.com/todos')
// .then(data => console.log(data));