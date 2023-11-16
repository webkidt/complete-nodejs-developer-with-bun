console.log('client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const address = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  messageOne.style.color = '#333333'

  try {
    const res = await fetch(`http://localhost:3000/weather?address=${address}`)
    const forecastData = await res.json()

    if (forecastData.error) {
      messageOne.textContent = forecastData.error
      messageOne.style.color = 'red'
      return console.error(forecastData.error)
    }

    const { location, forecast } = forecastData
    messageOne.textContent = location
    messageTwo.textContent = forecast

  } catch (error) {
    console.error(error)
  }
})
