function deepFreeze(target) {

    if(target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);

        Object.keys(target).forEach(key => {
            deepFreeze(target[key]);
        });
    }
    return target;
}

const person = {
    name: 'Lee',
    addr: {city: 'seoul'},
    friends: {name: 'park', addr: {city: 'busan'}}
};

deepFreeze(person);

person.addr.city = 'busan';
console.log(person);