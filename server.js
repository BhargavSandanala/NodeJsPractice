//Doing some math with our custom modules and importing them from math file(look in for it in the repository)
const math = require('./math');
console.log(math.add(2,3));
console.log(math.sub(2,3));
console.log(math.mult(2,3));
console.log(math.div(2,3));


//Ex-1
//We can also write the above code as:
const {add , sub , mult ,div} = require('./math');
console.log(add(2,3));
console.log(sub(2,3));
console.log(mult(2,3));
console.log(div(2,3));


//Ex-2
const {add , sub , mult, div} = require('./math');
console.log(add(18,7));
console.log(sub(18,7));
console.log(mult(3,6));
console.log(div(54,2));


//You can also print the modules at a time
console.log(add(20,5),sub(36,9));

