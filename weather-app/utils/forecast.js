const forecast = async (lat, long) => {
  const latLong = `${lat},${long}`
  const url = `http://api.weatherstack.com/current?access_key=125549a31d74e3da9bf337baaaad96c7&query=${latLong}&units=m`

  try {
    const request = await fetch(url)
    const data = await request.json()
    const { error, current } = data
    const { weather_descriptions, temperature, feelslike } = current

    if (error) {
      console.error('unable to find location:', error.info)
    } else {
      return `${weather_descriptions[0]}: It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
    }
  } catch (error) {
    console.error('unable to connect to weather service', error)
  }
}

export default forecast
