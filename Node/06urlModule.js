// new URL(input[, base])


const newUrl = new URL('http://gujaratunivercity.org/p/a/t/h?query=string#hash');
// const newUrl = 'https://geeksforgeeks.org/p/a/t/h?query=string#hash';
  
// url array in JSON Format
// console.log(newUrl);

// const myURL1 = new URL('https://geeksforgeeks.org/');
const myURL1 = new URL({ toString: () => 'https://geeksforgeeks.org/' });
  
console.log(myURL1.href)
