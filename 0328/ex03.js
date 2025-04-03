class AA {
    constructor(prefix) {
        this.prefix = this.prefix;
    }

    add(arr) {
        arr.map(function (item){
            console.log(this);
            return this.prefix + item;
        }, this);
    }
}

const me = new AA('webkit');
const arr = me.add(['transition', 'user-select']);
console.log(arr);