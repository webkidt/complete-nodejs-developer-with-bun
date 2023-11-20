import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)

try {
  await client.connect()
  const db = client.db(databaseName)

  // insert one document
  const insertOneResult = await db
    .collection('users')
    .insertOne({
      name: 'David',
      age: 27,
    })
    .catch((error) => {
      console.error(error)
    })
  console.log(insertOneResult)

  const insertManyResult = await db
    .collection('users')
    .insertMany([
      {
        name: 'Joy',
        age: 24,
      },
      {
        name: 'Victor',
        age: 22,
      },
    ])
    .catch((error) => {
      console.error(error)
    })
  console.log(insertManyResult)
} catch (error) {
  console.error(error)
}
