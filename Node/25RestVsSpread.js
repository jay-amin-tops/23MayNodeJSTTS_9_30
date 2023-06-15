[a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log("a",a);
// console.log("b",b);
// console.log("rest",rest);


// function addition(elements) {
function addition(a,...b) {
    let res =0
        b.forEach(element => {
            res+=element
        });
        console.log(res+a);
}
addition(60,90,80,90)


function spreadExample(name,uname,gender,email) {
    console.log("Name: ",name);
    console.log("uname: ",uname);
    console.log("gender: ",gender);
    console.log("email :",email);
}

UserDataArray = ["TOPS","Techh","Male","tops@tops.com"]

spreadExample(...UserDataArray)