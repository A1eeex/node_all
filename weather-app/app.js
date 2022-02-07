const request = require('request');
const chalk = require('chalk')
const geoCode = require('./utils/geocode')
const getWeather = require('./utils/weather')

console.log(process.argv)

const address = process.argv[2]
if (!address) {
    console.log('Please provide address')
} else {
    geoCode(address, (err, {latitude, longitude, location}) => {
        if (err) {
            return console.log('Err', err)
        }

        getWeather(latitude, longitude, (err, weatherData) => {
            if (err) {
                return console.log('err', err)
            }
            console.log(location)
            console.log(weatherData)
        })
    })
}


