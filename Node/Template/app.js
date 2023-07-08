const express = require("express");
const app = express();
const path = require("path");
// const hbs = require("express-handlebars");
const hbs = require("hbs")
require("dotenv").config();

// console.log(path.resolve());
const port = process.env.PORT;

// hbs.registerPartials(__dirname + '/views/');

app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(path.join(__dirname + "/public")));
var partials = __dirname + "/views/partials"
hbs.registerPartials(partials);


hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
// hbs.registerHelper("json", function (context) {
//   return JSON.stringify(context);
// });
// hbs.registerHelper('ifeq', function (a, b, options) {
//   if (a == b) { return options.fn(this); }
//   return options.inverse(this);
// });
// hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
//   return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
// });
// app.engine('hbs', hbs.engine({
//   extname: 'hbs', 
//   defaultLayout: 'index', 
//   layoutsDir: path.join(__dirname, 'views/'),
//   partialsDir  : [
//       //  path to your partials
//       path.join(__dirname, 'views/partials'),
//   ]
// }));


const demo = {
  name: "TOPS",
  age: 15,
  image: "topsimg",
};
app.get("/", (req, res) => {
  res.render("index");
  })
app.get("/login", (req, res) => {
  res.render("index");
});
app.get("/about",(req, res) => {
  var url = req.url;
  // console.log("req url",url); 
  res.render("about", { data: demo,urlData:url });
})
app.get("/service",(req, res) => {
  res.render("service");
})

app.get("*",(req, res) => {
  res.render("pageNotFound");
})

  .listen(port, () => {
    console.log(`Port is connecting on ${port}`);
  });

  