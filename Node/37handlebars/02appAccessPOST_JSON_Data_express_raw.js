const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = 3000;
app.use(express.static('public'))
hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs')
// app.use(express.raw());
var bodyParser = require('body-parser')

var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));

app.post('/rawdata', function (req, res) {
    console.log(req.body.toString());
    res.end();
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});