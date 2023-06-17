const axios = require("axios");

console.log("called module file");
function getAllUsersData(params) {
    console.log("called module getAllUsersData");
    return new Promise((resolve,reject)=>{
        console.log("called Promise file");

        axios.get("https://jayramin.000webhostapp.com/allusers").then(result=>{
            // console.log(result.data);
            let data = ""
            result.data.Data.forEach(element => {
                console.log(element.username);
                data+=element.username
            });
            resolve({"userdata":data})
        }).catch(err => {
            reject({"err":err})
            // console.log(err);
        })
    })
}


module.exports = { getAllUsersData }