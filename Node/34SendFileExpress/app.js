
const express = require("express");
const app = express()
const path = require("path")

app.get("/",function (req,res) {
    // console.log("This is called",req);
    console.log(__dirname);
    // res.sendFile("C:/xampp/htdocs/node/23MayNodeJSTTS_11/Node/34SendFileExpress/home.html")
    // res.sendFile(__dirname+"/home.html")
    // console.log(__dirname);
    // console.log(path);
    // console.log(path.join(__dirname,"home.html"));
    // res.sendFile( __dirname+"/home.html")
    res.sendFile(path.join(__dirname,"home.html"))
})
// app.get("/about",function (req,res) {
//     console.log("about us is called");
// })
app.get("/about", (req, resp) => {
    // resp.send("This is home page")
    resp.sendFile(path.join(__dirname, "aboutusfile.html"));
})
app.listen(5000,function (req,res) {
    console.log("server listed on http://localhost:5000");
})