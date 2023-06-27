const express = require('express')
const hbs = require('hbs')
const app = express()
app.use(express.static('public'))
hbs.registerPartials(__dirname+"/views/partials")
app.set('view engine', 'hbs')
// app.set('views', "/pages/")

app.get('/', (req, res) => {
    let projects = {
        name: 'Rahul',
        skills: ['Data Mining', 'BlockChain Dev', 'node.js']
    }
    console.log("called");
    console.log(projects);
    res.render('demo',{ project: projects })
})
app.get('/login', (req, res) => {
    res.render('loginpage')
})
 
app.listen(3000);