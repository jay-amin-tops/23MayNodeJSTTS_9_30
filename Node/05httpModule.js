var http = require('http');

var server = http.createServer(function (req,res) {
    console.log("Server Request",req,"Server Response",res);
    console.log({req,res});
})
// console.log(server);
server.listen(8000)