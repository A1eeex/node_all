const path = require('path')
const express = require('express')

const app = express()
const PORT = 3000;
const publicDirectoryPath = path.join(__dirname, '../public')
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'index app',
        name: 'alex'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        name: 'alex'
    })
})
app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help Page'
    })
})
app.listen(PORT, () => {
    console.log('server work on port ' + PORT)
})