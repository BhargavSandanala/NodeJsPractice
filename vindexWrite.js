 const fs = require('fs');
 const path = require('path');

 //Code 1 : WRITING A FILE
 //we dont need to specify utf-8 here while writing in a file as it is by default.
 //also we are creating a text file named "writeStarter.txt" here :

 fs.writeFile(path.join(__dirname,'writeStarter.txt'),"This is ROLEX sir  the ultimatum of LCU",(err)=>{
    if(err)throw err;
    console.log("write complete");
 });
 process.on('uncaughtException',err=>{
    console.error(`There's an Uncaught Error : ${err}`);
    process.exit(1);
 });



 
//Code 2 : APPENDING OUR FILES
//Now Appending our file with multiple text lines and also notice that can use line breakers also "/n".
//NOTE: The append also can create a new file !

fs.writeFile(path.join(__dirname,"writeStarter.txt"),"Hello This is Dilli (spent 10 years in jail)",(err)=>{
    if(err)throw err;
    console.log("Write Complete");


    fs.appendFile(path.join(__dirname,"writeStarter.txt"),"\n\nThis is ROLEX Sir the DrugLord kingpin and the guy who is responsible for your Wife's Death !!",(err)=>{
        if(err)throw err;
        console.log("Append Complete");
    });
});




//Code 3 : RENAMING THE EXISTING FILE
//As Node is Asynchronous in nature we dont know which procees (write,append,rename) will be executed first so in order to control that we put : 1)append inside write & 2)rename inside append !! 
//Actually this looks similar to Callbacks Hell in Js where we put one code in another so to avoid that we use Async , Await in Js !!

fs.writeFile(path.join(__dirname,"writeStarter.txt"),"Hello This is Dilli (spent 10 years in jail)",(err)=>{
    if(err) throw err;
    console.log("Write Complete");


fs.appendFile(path.join(__dirname,"writeStarter.txt"),"\n\nThis is ROLEX Sir the DrugLord kingpin and the guy who is responsible for your Wife's Death !!",(err)=>{
    if(err) throw err;  
    console.log("Append Complete");


    fs.rename(path.join(__dirname,"writeStarter.txt"),path.join(__dirname,"renamingWriteFile.txt"),(err)=>{
        if(err) throw err;
        console.log("Renaming Complete !!!");
    });
});
});
