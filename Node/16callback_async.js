function exampleAsync(a, b, callback) {
  console.log("exampleAsync");
  setTimeout(function() {
    callback(a + b);
  }, 2000);
}
console.log('Before asynchronous call');
exampleAsync(2, 3, function(finalresult)  {
    console.log('Result: ' + finalresult);
}); 
console.log('After asynchronous call');