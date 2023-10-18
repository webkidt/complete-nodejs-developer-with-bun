const geocode = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoid2Via2lkdCIsImEiOiJjanRzanVxb3MwbDRtNDNtbWFzdThyM3cyIn0.hdCpPCJVpGlvpkwO9iqZ_Q&limit=1`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.features.length === 0) {
      console.error('unable to find location.Try another search')
    } else {
      const [feature] = data.features
      const [long, lat] = feature.center
      return {
        latitude: lat,
        longitude: long,
        location: feature.place_name,
      }
    }
  } catch (error) {
    console.log('unable to connect to location service', error)
  }
}

export default geocode
