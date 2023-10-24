import express from 'express'
import { join } from 'path'

const app = express()
const port = 3000
const publicDirectoryPath = join(import.meta.dir, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.send({
    location: 'Plateau, Nigeria',
    forecast: `Chilly: it's 8 degrees out but feels like 6 degrees outside`,
  })
})


app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})

