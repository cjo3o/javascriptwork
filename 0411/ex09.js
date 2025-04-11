function doA({content, completed}) {
    console.log(`${content} ${completed ? '완료':'미완료'}`);
}

const todo = {id: 1, content: "HTML", completed: true};
doA(todo);