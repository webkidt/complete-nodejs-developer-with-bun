console.log('client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const location = search.value

  try {
    const res = await fetch(`http://localhost:3000/weather?address=${location}`)
    const forecastData = await res.json()

    if (forecastData.error) {
      return console.error(forecastData.error)
    }

    console.log(forecastData.location)
    console.log(forecastData.forecast)
  } catch (error) {
    console.error(error)
  }
})
