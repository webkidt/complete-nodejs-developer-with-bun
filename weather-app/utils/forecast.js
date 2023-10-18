const forecast = async (lat, long) => {
  const latLong = `${lat},${long}`
  const url = `http://api.weatherstack.com/current?access_key=125549a31d74e3da9bf337baaaad96c7&query=${latLong}&units=m`

  try {
    const request = await fetch(url)
    const data = await request.json()

    if (data.error) {
      console.error('unable to find location:', data.error.info)
    } else {
      console.log(
        `${data.current.weather_descriptions[0]}: It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`
      )
    }
  } catch (error) {
    console.error('unable to connect to weather service', error)
  }
}

export default forecast
