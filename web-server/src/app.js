const express = require('express')

const app = express()
app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>')
})
app.get('/help', (req, res) => {
    res.send([{
        name: 'Alex',
        age: 29,
    },
        {
            name: "Jef",
            age: 30,
        }])
})
app.get('/about', (req, res) => {
    res.send(`<h1>about title</h1>`)
})
app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.listen(5000, () => {
    console.log('server work')
})