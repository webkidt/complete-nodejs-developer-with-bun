import geocode from './utils/geocode'
import forecast from './utils/forecast'

// fetch coordinates for a given location
const data = await geocode('Abuja Nigeria')
console.log(data)

// fetch weather for a given location
forecast(9.896527, 8.858331)
