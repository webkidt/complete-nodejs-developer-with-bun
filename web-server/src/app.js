import express from 'express'
import { join } from 'path'

const app = express()
const port = 3000
const publicDirectoryPath = join(import.meta.dir, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
app.set('views', join(import.meta.dir, '../views'))

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
  res.send({
    location: 'Plateau, Nigeria',
    forecast: `Chilly: it's 8 degrees out but feels like 6 degrees outside`,
  })
})


app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})

