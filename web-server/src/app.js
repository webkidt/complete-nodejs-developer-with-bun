import express from 'express'
import { builtinModules } from 'module'

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send('Hello Express!')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/weather', (req, res) => {
  res.send(`<h2>Weather page</h2`)
})

app.get('/help', (req, res) => {
  res.send('Help page')
})

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})

