console.log('client side javascript file is loaded')

try {
  const res = await fetch('http://localhost:3000/weather?address=Boston')
  const forecastData = await res.json()

  if (forecastData.error) {
    console.error(forecastData.error)
  } else {
    console.log(forecastData.location)
    console.log(forecastData.forecast)
  }


} catch (error) {
  console.error(error)
}
