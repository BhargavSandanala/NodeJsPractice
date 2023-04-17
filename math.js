const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;
const div = (a,b) => a/b;
module.exports={ add, sub, mult, div};



//Ex-1
//We can also write the above modules like this:
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
exports.mult = (a,b) => a*b;
exports.div = (a,b) => a/b;


//Ex-2
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mult = (a,b) => a*b;
const div = (a,b) => a/b;
module.exports={add , sub , mult ,div};