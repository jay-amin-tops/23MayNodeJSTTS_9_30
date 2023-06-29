const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = 3000;
app.use(express.static('public'))
hbs.registerPartials(__dirname+"/views/partials")
app.use(express.json());
app.set('view engine', 'hbs')
// app.set('views', "/pages/")

 
// Without this middleware
// app.use(express.json());
app.post('/jsondata', function (req, res) {
    console.log(req.body)
    res.end();
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});