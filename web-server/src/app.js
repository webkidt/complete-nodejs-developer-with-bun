import express from 'express'
import { builtinModules } from 'module'

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send('<h1>Weather</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About WeatherAPI</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Plateau, Nigeria',
    forecast: `Chilly: it's 8 degrees out but feels like 6 degrees outside`,
  })
})

app.get('/help', (req, res) => {
  res.send({
    name: 'David',
    age: 28,
  })
})

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})

