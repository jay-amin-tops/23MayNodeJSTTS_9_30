const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = 3000;
app.use(express.static('public'))
hbs.registerPartials(__dirname+"/views/partials")
app.use(express.json());
app.set('view engine', 'hbs')
// app.set('views', "/pages/")

app.get('/', (req, res) => {
    let projects = {
        name: 'Rahul',
        skills: ['Data Mining', 'BlockChain Dev', 'node.js']
    }
    // console.log("called");
    // console.log(projects);
    res.render('demo',{ project: projects })
})
app.get('/login', (req, res) => {
    res.render('loginpage')
})
 
 
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
// app.listen(3000,function () {
//     console.log("server Started http://localhost:3000/");
// });