{/* <ul class="w3r_list">
<li><a href="#util-format">util.format(format, [...])</a></li>
<li><a href="#util-debug">util.debug(string)</a></li>
<li><a href="#util-error">util.error([...])</a></li>
<li><a href="#util-puts">util.puts([...])</a></li>
<li><a href="#util-print">util.print([...])</a></li>
<li><a href="#util-log">util.log(string)</a></li>
<li><a href="#util-inspect">util.inspect(object, [options])</a></li>
<li><a href="#cutil-inspect">Customizing util.inspect colors</a></li>
<li><a href="#util-isarray">util.isArray(object)</a></li>
<li><a href="#util-isregexp">util.isRegExp(object)</a></li>
<li><a href="#util-isdate">util.isDate(object)</a></li>
<li><a href="#util-iserror">util.isError(object)</a></li>
<li><a href="#util-inherits">util.inherits(constructor, superConstructor)</a></li>
</ul> */}



var util = require('util');
var my_name = 'Sunita', 
my_class = 5, 
my_roll_no = 11, 
my_fav_subject= { subj1: 'English', subj2: 'Math.'}; 
var format1 = util.format('My name is %s ',my_name);
var format2 = util.format('I read in class %d,',my_class);
var format3 = util.format('My roll no. is %d,',my_roll_no);
var format4 = util.format('My favorite subjects are %j',my_fav_subject);
console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);


var testString = "Test Test";
util.debug(testString); // "Test Test";
 
var test = {};
util.debug(test); // "[object Object]";
util.debug(JSON.stringify(test)); // "{}"


util.error("Error-1","Error-2","Error-3");
