function doA() {
    console.log(this);
}

const obj = {
    name: '디스디스',
    doA() {
        console.log(this.name);
    }
}

obj.doA();

const arrow = () => {
    console.log(this);
}

const obj2 = {
    name: 'obj2',
    arrow: () => {
        console.log('this' + JSON.stringify(this));
    }
}

obj2.arrow();