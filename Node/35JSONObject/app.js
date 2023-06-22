const express = require("express");
const app = express();
const path = require("path")
const users = require('./users.json')


app.get("/", (req, resp) => {
    // resp.send("This is home page")
    resp.sendFile(path.join(__dirname, "home.html"));
})


app.get("/about", (req, resp) => {
    //resp.send("This is about us page")
    // resp.json({
    //     "Name": "tops",
    //     "email": "tops@gmail.com"
    // })
    const dt = req.query.abc;
    console.log(dt)
    resp.sendFile(path.join(__dirname, "about.html"))
})

app.get("/accessjsondata", (req, resp) => {
    //resp.send("This is contact us page")
    // JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often, so in this article, we give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.
    console.log(users);
})
app.get("/pushjson", (req, resp) => {
    let userData = {
        name:"testing",
        age:"35",
        language:["Hack","ruby","Python"]
    }
    users.push(userData)
    console.log(users);
})

app.get("*", (req, resp) => {
    //resp.send("404 page not found")
    resp.sendFile(path.join(__dirname, "error.html"))
})


app.listen(3000, (req, resp) => {
    console.log("Server running on port 3000")
})
