// const getallusers = require('./getallusers')
const getallusers = require('./geocode')


getallusers.getGeoData("Ahmedabad,gujarat").then(result=>{
    // console.log("called res");
    console.log(result);
})


// const getLatlng = async()=>{
//     const result = await  
// }
