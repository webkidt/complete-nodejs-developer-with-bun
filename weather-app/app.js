const url =
  'http://api.weatherstack.com/current?access_key=125549a31d74e3da9bf337baaaad96c7&query=9.896527,8.858331&units=m'

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(
      `${data.current.weather_descriptions[0]}: It is currently ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`
    )
  } catch (error) {
    console.log(error)
  }
