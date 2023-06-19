let http = require('http'), url = require("url")
const Api = require('./API')



http.createServer(function (req, res) {
    let urlParts = url.parse(req.url)
    switch (urlParts.pathname) {
        case "/allusers":
            let Result = ""
            Api.getUsersData().then((resData) => {
                console.log("API res",resData);
                resData.map((data)=>{
                    console.log(data.username);
                    Result += data.username
                
                })
                res.end(`Hello, this is the allusers data :) ${Result}`);
            })

            break;
        case "/cityinfo":
            res.end("Hello, this is the cityinfo :)");
            break;

        default:
            res.writeHead(404, {
                "Content-type": "text/hmtl",
                "my-own-header": "hello-jay"
            })
            res.end("Hello, this is the home page :)");
            // homepage(req, res);
            break;
    }
}).listen(5000)
