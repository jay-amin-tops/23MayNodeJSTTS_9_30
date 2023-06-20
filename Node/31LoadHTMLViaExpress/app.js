var http = require('http');
var fs = require('fs');
var path = require('path');
var ext = /[\w\d_-]+\.[\w\d]+$/;

// const express = require('express');
// const app = express();
// app.get('/', function(request, response){
//     console.log("called",__dirname);
//     // response.sendFile(__dirname+'/myhtmlfile.html');
//     response.sendFile('C:/xampp/htdocs/node/23MayNodeJSTTS_11/Node/31LoadHTMLViaExpress/myhtmlfile.html');
// });

// app.listen(3000);

http.createServer(function(req, res){
    console.log(req.url);
    console.log(ext.test(req.url));
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('myhtmlfile1.html').pipe(res);
    } else if (req.url === '/data') {
        console.log("called",req.url);
        fs.exists(path.join(__dirname, req.url), function (exists) {
            if (exists) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.createReadStream('index.html').pipe(res);
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                fs.createReadStream('404.html').pipe(res);
            }
        });
    } else {
        //  add a RESTful service
    }
}).listen(3000);