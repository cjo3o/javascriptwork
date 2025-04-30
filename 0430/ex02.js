fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
        return res.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })