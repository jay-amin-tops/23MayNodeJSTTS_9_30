const { log } = require('console');
var http = require('http');


let server = http.createServer(function (req,res) {
    if (req.url == '/') {
        log("something")
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    if (req.url == '/stundet') {
        log("something")
    }
})

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')


