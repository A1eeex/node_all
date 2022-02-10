const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const getWeather = require('./utils/weather')
const app = express()
const PORT = 3000;

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(partialsPath)

// Setup static directory to save
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'index title',
        name: 'Alex'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about page',
        name: 'Jax'
    })
})
app.get('/weather', (req, res) => {
        if (!req.query.address) {
            return res.send({
                error: 'You must provide address!'
            })
        }
        geoCode(req.query.address, (error, response) => {
            if (error) {
                return res.send(error)
            }
            console.log(response)
            getWeather(response.latitude, response.longitude, (err, resWeather) => {
                console.log(resWeather)
                if (err) {
                    return res.send(err)
                }
                res.send({
                        location: resWeather.location,
                        country: resWeather.country,
                        temperature: resWeather.temperature,
                        address: req.query.address
                    }
                )
            })
        })

    }
)

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search tern'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help page',
        name: 'Carolif'
    })
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errMessage: 'Help article not found',
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        errMessage: 'Page not found!',
        title: '404',
        name: 'empty'
    })
})

app.listen(PORT, () => {
    console.log('server work on port ' + PORT)
})