let http =require('http'),url = require("url")


http.createServer(function (req,res) {
    let urlParts = url.parse(req.url)
    switch (urlParts.pathname) {
        case "/":
            homepage(req,res)
            break;
        case "/read":
            read(req,res)
            break;
    
        default:
             res.writeHead(404,{
                "Content-type":"text/hmtl",
                "my-own-header":"hello-jay"
            })
            homepage(req,res);
            break;
    }
}).listen(5000)

function homepage(req, res) {
    res.end("Hello, this is the home page :)"); 
}
 
function read(req, res) {
    res.end("Hello, there is no data for reading yet.");    
}
 