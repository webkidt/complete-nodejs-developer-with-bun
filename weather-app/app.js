import geocode from './utils/geocode'
import forecast from './utils/forecast'

// fetch coordinates for a given location
geocode('Plateau Nigeria')
  .then((geoData) => {
    forecast(geoData.latitude, geoData.longitude)
      .then((forecastData) => {
        console.log(geoData.location)
        console.log(forecastData)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  .catch((error) => {
    console.log(error)
  })


