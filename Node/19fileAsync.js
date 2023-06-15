// const { Console } = require("console");
const fs = require("fs");


// fs.mkdir("Practice", (err) => {
//     console.log("dir created....");
// })
// console.log(__dirname);
fs.writeFile(`${__dirname}/Practice/hello.txt`, "Hello Node ", (err) => {
    if (err){
        return console.log("error",err);
    }
        
    console.log("file created...");
})

