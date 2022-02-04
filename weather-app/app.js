const request = require('request');
const URL = 'http://api.weatherstack.com/current?access_key=0e46680f761d249f22887eda194bd873&query=41.850,-87.650&units=f'
request({ url: URL, json:true}, (err, response) => {
    const current = response.body.current
    console.log(`${current.weather_descriptions[0]} it is ${current.temperature} celsius out. But fill like ${current.feelslike} celsius`)
})
