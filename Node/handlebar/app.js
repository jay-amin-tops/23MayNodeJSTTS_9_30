const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
require('dotenv').config();
port = process.env.PORT

app.set('view engine','hbs');
app.set('views',path.join(__dirname + '/pages/views'))
app.use(express.static(path.join(__dirname + '/public')));

app.get('/login', (req, res) => {
    res.render('index')
    // res.send('<p>some html</p>');
    // res.end()
})
app.get('*', (req, res) => {
    res.send('<p>404</p>');
    res.end()
})

app.listen(port, console.log((
    `Port is listening on ${port}`
)))

