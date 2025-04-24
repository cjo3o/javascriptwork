const lodash = require('lodash');

const {debounce, throttle} = lodash;
// console.log(lodash.debounce);
// console.log(lodash.throttle);

const aa = debounce(() => {
    console.log('debounce');
}, 300);

aa();
aa();
aa();

const bb = throttle(() => {
    console.log('throttle');
}, 300);

bb();
bb();
bb();
bb();