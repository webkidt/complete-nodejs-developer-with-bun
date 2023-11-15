import express from 'express'
import { join } from 'path'
const hbs = require('hbs')

const app = express()
const port = 3000

// Paths for Express config
const publicDirectoryPath = join(import.meta.dir, '../public')
const viewsPath = join(import.meta.dir, '../templates/views')
const partialsPath = join(import.meta.dir, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'David Pam',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'David Pam',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'David Pam',
    helpText: 'This is some helpful text.',
  })
})

app.get('/weather', (req, res) => {
if (!req.query.address) {
  return res.send({ error: 'You must provide an address!' })
}
  res.send({
    location: 'Plateau, Nigeria',
    forecast: `Chilly: it's 8 degrees out but feels like 6 degrees outside`,
    address: req.query.address,
  })
})

app.get('/orders', (req, res) => {
  if (!req.query.search) {
    return res.send({ error: 'You must provide search query' })
  }
  res.send({
    orders: [],
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'David Pam',
    errorMessage: 'Help article not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'David Pam',
    errorMessage: 'Page not found.',
  })
})


app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})

