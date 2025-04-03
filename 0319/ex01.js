class Post {
    constructor(title,content) {
        this.title = title;
        this.content = content;
    }

    sayHi() {
        console.log(`this.title = ${this.title} this.content = ${this.content}`);
    }

    static daA() {
        console.log(`this.title = ${this.title} this.content = ${this.content}`);
    }
}

const post = new Post('제목', '내용');
console.log(post);

post.sayHi();
post.doA();