//refer to reaadStarter.txt file from where this code is reading the data 


const fs = require('fs');

//always be sure to include the correct file path :
fs.readFile('C:\\Node Js course\\reaadStarter.txt',(err,data)=>{

//     //If any error is incurred it will throw the error with specific error data or else it will simply console log
if(err)throw err;

//if you just give the data the the output will be int like this :<Buffer 48 69 20 49 27 6d 20 52 4f 4c 45 58 20 53 69 72 20 21>
console.log(data);

//So you have to change it into a String :
console.log(data.toString());
})





//instead of changing the data to string you can just include the encoding :- utf-8 like this:
fs.readFile('C:\\Node Js course\\reaadStarter.txt','utf-8',(err,data)=>{
if(err)throw err;
console.log(data);
 });
process.on('uncaughtException',err=>{
     console.error(`There was an uncaught error :  ${err}`);
   process.exit(1);
})




//Practice Ex-2
const fs = require('fs');
fs.readFile('C:\\Node Js course\\reaadStarter.txt','utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});
process.on('uncaughtException',err=>{
    console.error(`There is an Uncaught Error : ${err}`);
    process.exit(1);
})
