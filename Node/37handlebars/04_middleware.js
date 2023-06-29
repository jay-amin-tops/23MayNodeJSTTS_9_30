const express = require('express');
const app = express();
const router = express.Router();
var url = require('url');
const PORT = 3000;

const requestTime = function (req, res, next) {
    // console.log(req);
    var q = url.parse(req.url, true);
    // console.log("Something",q);
    console.log("Something",q.query);
    console.log("Something",q.query.test);
    if (q.query.test == 1) {
        req.requestTime = Date.now()
        next()
    } else {
        console.log("nothing to perform");
        return
    }
}

app.use(requestTime)

app.get('/middleware', (req, res) => {

    // var q = url.parse(req.url, true);
    // // console.log("Something",q);
    // console.log("Something",q.query);
    // console.log("Something",q.query.test);
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})
