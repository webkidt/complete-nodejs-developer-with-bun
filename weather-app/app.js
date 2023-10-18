// Purpose: To fetch weather data from weatherstack API
const weatherStackURL =
  'http://api.weatherstack.com/current?access_key=125549a31d74e3da9bf337baaaad96c7&query=9.896527,8.858331&units=m'

  try {
    const weatherResponse = await fetch(weatherStackURL)
    const weatherData = await weatherResponse.json()
    console.log(
      `${weatherData.current.weather_descriptions[0]}: It is currently ${weatherData.current.temperature} degrees out. It feels like ${weatherData.current.feelslike} degrees out.`
    )
  } catch (error) {
    console.log(error)
  }

// Purpose: To fetch geocoding data (lat,long) from mapbox API
const mapboxURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2Via2lkdCIsImEiOiJjanRzanVxb3MwbDRtNDNtbWFzdThyM3cyIn0.hdCpPCJVpGlvpkwO9iqZ_Q&limit=1'

  try {
    const mapboxResponse = await fetch(mapboxURL)
    const mapboxData = await mapboxResponse.json()
    const [feature] = mapboxData.features
    const [long, lat] = feature.center
    console.log(`Latitude: ${lat}, Longitude: ${long}`)
  } catch (error) {
    console.log(error)
  }
