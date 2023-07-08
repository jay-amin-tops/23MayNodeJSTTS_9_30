const express = require("express");
const app = express();
const path = require("path");
// const hbs = require("express-handlebars");
const hbs = require("hbs");
require("dotenv").config();
const port = process.env.PORT;
// hbs.registerPartials(__dirname + '/views/');
app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(path.join(__dirname + "/public")));
var partials = __dirname + "/views/partials";
hbs.registerPartials(partials);
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
// app.engine('hbs', hbs.engine({
//   extname: 'hbs',
//   defaultLayout: 'index',
//   layoutsDir: path.join(__dirname, 'views/'),
//   partialsDir  : [
//       //  path to your partials
//       path.join(__dirname, 'views/partials'),
//   ]
// }));

const data = {
  header: {
    name: "Restoran",
  },
  navbar: {
    links: [
      { name: "Home", active: false, url: "index" },
      { name: "About", active: true, url: "about" },
      { name: "Service", active: false, url: "service" },
      { name: "Menu", active: false, url: "menu" },
    ],
  }
}

app.get("/", (req, res) => {
  res.redirect('index');
  // var url = req.url;
  // res.render("index", {data : "Home",urlData:url});
});

app.get("/index",(req, res) => {
  var url = req.url;
  res.render("index", {data : "Home",urlData:url})
})

app.get("/about", (req, res) => {
  var url = req.url;
  res.render("about", {data : "About us",urlData:url});
});

app.get("/service", (req,res) => {
  var url = req.url;
  res.render("service", {data : "Service",urlData:url})
})

app.get("/booking", (req,res) => {
  var url = req.url;
  res.render("booking", {data: "Booking",urlData:url})
})

app.get("/menu", (req,res) => {
  res.render("menu", {data: "Menu"})
})

app.get("/team", (req,res) => {
  res.render("team", {data: "Team"})
})

app.get("/testimonial", (req,res) => {
  res.render("testimonial", {data: "Testimonial"})
})

app.get("/contact", (req,res) => {
  res.render("contact", {data: "Contact"})
})
app.get("/login", (req,res) => {
  res.render("login", {data: "Login"})
})
app.get("/registration", (req,res) => {
  res.render("registration", {data: "Registration"})
})

app.get("*", (req, res) => {
  res.render("pageNotFound");
});

app.listen(port, () => {
  console.log(`Port is connecting on ${port}`);
});
