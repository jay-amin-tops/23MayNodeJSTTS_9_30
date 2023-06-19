const { default: axios } = require("axios")

const getUsersData = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://jayramin.000webhostapp.com/allusers").then((res) => {
            console.log("Res from server",res);
            resolve(res.data.Data)
        }).catch((err) => {
            reject(err)
        })
    })
}
const getLocationData = (city) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            const lat = data.geometry.lat;
            const lng = data.geometry.lng;
            resolve({lng:lng,lat:lat})
        }).catch((err) => {
            reject(err)
        })
    })

}
module.exports = {getUsersData,getLocationData}