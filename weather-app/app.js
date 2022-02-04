const request = require('request');
const chalk = require('chalk')

// const URL = '6http://api.weatherstack.com/current?access_key=0e46680f761d249f22887eda194bd873&query=41.850,-87.650&units=f'
// request({url: URL, json: true}, (err, response) => {
//     try {
//         const current = response.body.current
//         const result = `${current.weather_descriptions[0]} it is ${current.temperature} celsius out. But fill like ${current.feelslike} celsius`
//         console.log(chalk.bold.inverse.green(result))
//     } catch (e) {
//         console.log('unable to connect to service!')
//         console.log(chalk.bold.inverse.red(e))
//     }
// })

//Geocoding

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYTFlZWV4IiwiYSI6ImNrejgybHV6MDFlajkycXJ4cmJnN2p2NTYifQ.zK2QxeNhngWUPWufuvNT-w&limit=1'

request({url: geoURL}, (error, resp) => {

    const toJson = JSON.parse(resp.body)
    const firstItem = toJson.features[0]
    if (error) {
        console.log('Error connection to location services')
    } else if (toJson.features.length === 0) {
        console.log('Try write correct location')
    } else {
        console.log(chalk.bold.inverse(`latitude is ${firstItem.center[0]} and logitude ${firstItem.center[1]}`))
    }


})