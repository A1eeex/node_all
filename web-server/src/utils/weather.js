const request = require("request");
const getWeather = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0e46680f761d249f22887eda194bd873&query=${latitude},${longitude}}&units=m`
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to service!', null)
        } else if (body.error) {
            callback('unable to connect to service!', null)
        } else {
            callback(null, {
                location: body.location.name,
                country: body.location.country,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                descriptions: body.current.weather_descriptions[0]
            })
        }
    })
}
module.exports = getWeather