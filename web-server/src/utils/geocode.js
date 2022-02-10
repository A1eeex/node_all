const request = require("request");
const geoCode = (address, callback) => {
    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYTFlZWV4IiwiYSI6ImNrejgybHV6MDFlajkycXJ4cmJnN2p2NTYifQ.zK2QxeNhngWUPWufuvNT-w&limit=1`
    request({url: geoURL, json: true}, (error, {body}) => {
        if (error) {
            callback('Error connection to location services!', undefined)
        }else if (body.features.length ===0){
            callback('Error connection to location services!', undefined)
        }else{
            callback(null, {
                longitude:body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geoCode