import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)

try {
  await client.connect()
  const db = client.db(databaseName)

  // insert one document to users collection
  // await db
  //   .collection('users')
  //   .insertOne({
  //     name: 'David',
  //     age: 27,
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

  // insert many documents to tasks collection
  await db
    .collection('tasks')
    .insertMany([
      {
        description: 'Clean the house',
        completed: true,
      },
      {
        description: 'Renew inspection',
        completed: false,
      },
      {
        description: 'Pot plants',
        completed: false,
      },
    ])
    .catch((error) => {
      console.error(error)
    })
} catch (error) {
  console.error(error)
}
