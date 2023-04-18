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

/*The first line of the code const fs = require('fs'); imports the fs module from the Node.js core library. This module provides an API for interacting with the file system.

The second line of the code uses the readFile method from the fs module to asynchronously read the contents of a file. The first argument to this method is the path to the file that you want to read. In this case, it’s 'C:\\Node Js course\\reaadStarter.txt'. The second argument is the encoding that should be used when reading the file. In this case, it’s 'utf-8', which means that the contents of the file will be interpreted as a UTF-8 encoded string.

The third argument to the readFile method is a callback function that will be called once the file has been read. This callback function takes two arguments: err and data. If an error occurred while reading the file, then err will contain an error object and data will be undefined. If no error occurred, then err will be null and data will contain the contents of the file.

In this code, if an error occurs while reading the file, it is thrown using the throw keyword and logged to the console using console.log. If no error occurs, then the contents of the file are logged to the console using console.log.

The last part of the code adds an event listener for the uncaughtException event on the global process object. This event is emitted when an uncaught exception occurs in the program. The callback function for this event takes one argument: err, which contains information about the error that occurred.

In this code, if an uncaught exception occurs, an error message is logged to the console using console.error, and then the process is exited with a status code of 1 using process.exit(1). A non-zero exit code indicates that an error occurred.*/
