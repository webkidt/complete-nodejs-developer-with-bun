const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    }

    callback(data)
  }, 2000)
}

geocode('Philadelphia', (data) => {
  console.log(data)
})

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(3, 2, (sum) => {
  console.log(sum)
})
