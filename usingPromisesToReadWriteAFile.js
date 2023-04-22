//NOTE : we also use Async , Await here 
const fsPromises = require('fs').promises;
const path =  require('path');


// Code 1 : Using Promises to read a file
const fileOps = async () => {
try{
    const data = await fsPromises.readFile(path.join(__dirname,"reaadStarter.txt"),"utf-8");
    console.log(data);
}
catch(err){
    console.error(err);
}

}

fileOps();


//Code 2 : writing a file
// NOTE : Here we are using the const data to read and we are using the same data which has been read to be writtened in a new write file
const fileOps = async () =>{
    try{
     const data = await fsPromises.readFile(path.join(__dirname,"reaadStarter.txt"),"utf-8");
     console.log(data);
     await fsPromises.writeFile(path.join(__dirname,"promisesWriteFile.txt"),data);
     console.log("Write Complete !");
    }
    catch(err){
        console.error(err);
    }
}

fileOps();


//CODE 3 : practice code for read & write 
// NOTE : Here i tried to append new text by adding it to the data
const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,"reaadStarter.txt"),"utf-8");
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname,"promisesWritefile.txt"),data+"\n \n Hello this is new text that is attached to the data that is fetched from the read file !!!");
        console.log("Write Complete !!!");
    }
    catch(error){
        console.error(error);
    }
}
fileOps();


//CODE 4 : Appending to the file some text
const fileOps = async () =>{
    try{
    
        const data = await fsPromises.readFile(path.join(__dirname,"reaadStarter.txt"),"utf-8");
        console.log(data);
    
        await fsPromises.writeFile(path.join(__dirname,"promisesWriteFile.txt"),data);
        console.log("\nWrite complete !!");

        await fsPromises.appendFile(path.join(__dirname,"promisesWriteFile.txt"),"\n \n This is a Appended text to the read data !")
        console.log("\nAppend complete !!!");
    

    }catch(err){
        console.error(err);
    }
};

fileOps();


//CODE 5 : renaming the file !

const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,"reaadStarter.txt"),"utf-8");
        console.log(data);


        //Here Unlink does the Delete Operation
        await fsPromises.unlink(path.join(__dirname,"reaadStarter.txt"),"utf-8");
        console.log("\n Unlink Complete \n")

        await fsPromises.writeFile(path.join(__dirname,"promisesWriteFile.txt"),data);
        console.log("\nWrite Complete");

        await fsPromises.appendFile(path.join(__dirname,"promisesWriteFile.txt"),"\n \n This is an Appended Text !!");
        console.log("\nAppend complete !!");

        await fsPromises.rename(path.join(__dirname,"promisesWriteFile.txt"),path.join(__dirname,"promisesRenameFile.txt"));
        console.log("\nRename Complete !!\n");


    //    const newData = await fsPromises.readFile(path.join(__dirname,"promisesComplete.txt"),"utf-8");
    //    console.log(newData);


   
    }catch(err){
        console.log(err);
    }
};

fileOps();




//This read & write operation below is used for working with large Files:
const fs = require ('fs');

const path = require ('path');

const rs = fs.createReadStream(path.join(__dirname,"lorem.txt"),{ encoding : "utf8"});

const ws = fs.createWriteStream(path.join(__dirname,"new-lorem.txt"));


rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
    console.log("Write to New File complete !!");
})


//There's a better way to use the above code more efficiently :

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,"lorem.txt"),{encoding:"utf-8"});

const ws = fs.createWriteStream(path.join(__dirname,"lorem2.txt"));

rs.pipe(ws);
console.log("write complete !");







