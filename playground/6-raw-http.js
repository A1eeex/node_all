const http = require('http')
const fs = require('fs');
const url = `http://asspi.weatherstack.com/current?access_key=0e46680f761d249f22887eda194bd873&query=40,-70&units=m`
const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})
request.on('error', (error) => {
    console.log('AN error: ' + error)
})
request.end()
