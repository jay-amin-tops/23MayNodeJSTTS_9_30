var http = require('http');
var path = require('path');
var server = http.createServer(function (req,res) {
    // console.log("Server Request",req,"Server Response",res);
    // console.log({req,res});
    console.log("Server Started");
    let path1 = path.format({
        root: "C:\\ignored\\root",
        dir: "website\\dist",
        base: "index.html",
    });
    console.log("Path 1:", path1);
     
    return path.basename('myfile.html');
})
// console.log(server);
server.listen(8000)




