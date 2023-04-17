 
 //Our Output can be printed in terminal directly
 console.log("ROLEX Sir!!!");
 console.log(global);


const { log } = require('console');

//This is a module which we are importing through node similar to Js modules
const  os=require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());


//We can get our dir/file name directly through node like this
console.log(__dirname);//use 2 underscores
console.log(__filename);


//We can also get our file & path / dir name through node modules :
const path=require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));//extname=extension name

//Through the below code all the path will be returned as objects in our terminal
console.log(path.parse(__filename));


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

