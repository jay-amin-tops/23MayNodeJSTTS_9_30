let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20
// [50,60,90,80,90];
// a =50
// b =60
// C =90
// D =80
// e =90
//  [a,b,c,d,e]= [50,60,90,80,90];
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]