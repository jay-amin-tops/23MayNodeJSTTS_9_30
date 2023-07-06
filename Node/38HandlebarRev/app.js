
const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require("path");
const PORT = 5000
// hbs.registerPartials(__dirname + "/views/partials")


app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, "template"));



    // hbs.registerPartials(__dirname + "/template/partials");
// or
    var partialsDir = __dirname + "/template/partials";
    hbs.registerPartials(partialsDir);


var demo = {
    name: "TOPS",
    age: 15,
    image: "topsimg",
};
// var arr = [
//     {
//         name: "Rohan",
//         age: 26,
//     },
//     {
//         name: "user 1",
//         age: 25,
//     },
// ];

app.get("/", function (req, res) {
    res.render("indexinsidetemp", { demo: demo });
    // res.render("firstpage")
});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});