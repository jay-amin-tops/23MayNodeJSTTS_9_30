

//get all employee id
//based on id get emp name and dept
//based on id and name get emp address

// const allEmp = [10, 20, 30, 40, 50, 60];
// setTimeout(() => {
//     console.log(allEmp);
// }, 2000);
// const edata = {
//     "name": "tops",
//     "email": "tops@gmail.com"
// }
// setTimeout((eid) => {
// }, 2000, allEmp[1]);
// console.log(`emp id is and emp name is ${edata.name}`)
// setTimeout((name) => {
//     console.log("Called by " + name)
// }, 2000, edata.name);


const empId = () => {
    setTimeout(() => {
        const allEmp = [10, 20, 30, 40, 50, 60];
        console.log(allEmp);
        setTimeout((eid) => {
            const edata = {
                "name": "tops",
                "email": "tops@gmail.com"
            }
            console.log(`emp id is ${eid} and emp name is ${edata.name}`)
            setTimeout((name) => {
                console.log("Called by " + name)
            }, 2000, edata.name);
        }, 2000, allEmp[1]);
    }, 2000);
}
empId();