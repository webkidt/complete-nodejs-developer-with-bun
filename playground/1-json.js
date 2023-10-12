const dataFile = Bun.file('1-json.json')
const dataObj = await dataFile.json()

dataObj.name = 'David'
dataObj.age = 28

const JSONData = JSON.stringify(dataObj)
await Bun.write('1-json.json', JSONData)
