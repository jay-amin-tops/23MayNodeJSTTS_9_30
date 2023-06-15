// Application Programming Interface 
// API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses.

// const { log } = require("async")


// fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((result)=>{
//     console.log(result)
// })

const axios = require("axios")

axios.get("https://jayramin.000webhostapp.com/allusers").then(result=>{
    console.log(result.data);
    // Object.entries(result.data.Data).forEach(element => {
    result.data.Data.forEach(element => {
        console.log(element.username);
    });
    // console.log(Object.entries(result));
    // Object.entries(result).map((key,val)=>{
    //     // console.log(key.data);
    //     // console.log(key[data]);
    //     // console.log(key.name);
    //     console.log(key['name']);
    // })
    // Object.entries(result).forEach((element,i) => {
    //     console.log(element[0]);
    // });
    // console.log("Called api",result);
    // for (let i = 0; i < result.length; i++) {
    //     console.log(result.data)
    //     // console.log(result.name.common + " : " + result.data[i].capital)
    // }
}).catch(err => {
    console.log(err);
})