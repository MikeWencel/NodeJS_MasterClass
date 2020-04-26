const fs = require("fs");

fs.writeFile('hello.txt',"Hello from Node.js",function(err,result){
    if(err) console.log('error',err)
});

console.log("Hello")