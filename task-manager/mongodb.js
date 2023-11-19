import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)

try {
  await client.connect()
  const db = client.db(databaseName)

  await db.collection('users').insertOne({
    name: 'David',
    age: 27,
  })
} catch (error) {
  console.error(error)
}
