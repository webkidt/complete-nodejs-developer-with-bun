import { MongoClient, ObjectId } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)
const id = new ObjectId()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

try {
  await client.connect()
  const db = client.db(databaseName)

  // insert one document to users collection
  // const insertOneResult = await db
  //   .collection('users')
  //   .insertOne({
  //     _id: id,
  //     name: 'Joseph',
  //     age: 26,
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
  // console.log(insertOneResult)

  // insert many documents to tasks collection
  // await db
  //   .collection('tasks')
  //   .insertMany([
  //     {
  //       description: 'Clean the house',
  //       completed: true,
  //     },
  //     {
  //       description: 'Renew inspection',
  //       completed: false,
  //     },
  //     {
  //       description: 'Pot plants',
  //       completed: false,
  //     },
  //   ])
  //   .catch((error) => {
  //     console.error(error)
  //   })
} catch (error) {
  console.error(error)
}
