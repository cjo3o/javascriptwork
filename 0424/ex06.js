const xhr = new XMLHttpRequest();

xhr.open('\'https://dummyjson.com/todos\'');

xhr.send();

xhr.onreadystatechange = function () {
    console.log('readyState값 변경될 때마다 출력')
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    }
}