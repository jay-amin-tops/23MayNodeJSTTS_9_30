// querystring.parse( str[, sep[, eq[, options]]]) )
const querystring = require("querystring");
  
// Specify the URL query string
// to be parsed
let urlQuery =  "username=user1&units=kgs&units=pounds&permission=false";
  
// Use the parse() method on the string
let parsedObject = querystring.parse(urlQuery);

let parsedObjectAbc = querystring.stringify({ w: 'TEST', foo: 'bar' }, null, null, { encodeURIComponent: "gbkEncodeURIComponent" }); 



console.log("Parsed Query:", parsedObject);
console.log("Parsed Query:", parsedObjectAbc);