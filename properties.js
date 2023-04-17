 
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


