class Users{
    constructor(users) {
        this.users = users;
    }

    findById(Id) {
        const user = this.users.filter((item) => {
            return item.id === Id;

        })
        console.log(user);
    }

    remove(Id) {
        this.users = this.users.filter((item) => {
            return item.id !== Id;
        })
    }
}

const myUsers = new Users ([
    {id: 1, name: '홍길동'},
    {id: 2, name: '이길동'},
    {id: 3, name: '박길동'}
]);

console.log(myUsers);
myUsers.findById(3);
myUsers.remove(2);
console.log(myUsers);