
// const axios = require("axios")

const AccessModuleApi = require('./27.1ModuleForApi')

// console.log("called API file");
AccessModuleApi.getAllUsersData().then((res)=>{
console.log(res);
})
// console.log("called ",Res);