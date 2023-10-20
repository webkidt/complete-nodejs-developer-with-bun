import geocode from './utils/geocode'
import forecast from './utils/forecast'

// get location from cli, fetch coordinates for the given location and get weather forecast for the location
const getForecast = (arr) => {
  if (arr < 3) {
    console.error('Please provide a location')
    return
  } else {
    const location = arr.slice(2).join('')
    geocode(location)
      .then((geoData) => {
        forecast(geoData.latitude, geoData.longitude)
          .then((forecastData) => {
            console.log(geoData.location)
            console.log(forecastData)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

getForecast(Bun.argv)
