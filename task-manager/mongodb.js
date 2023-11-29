import { MongoClient, ObjectId } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)
const id = new ObjectId()

try {
  await client.connect()
  const db = client.db(databaseName)

  // find one user
  // const user = await db
  //   .collection('users')
  //   .findOne({ _id: new ObjectId('655ecd3bd2efffe39a1240ec') })
  //   .catch((error) => console.error(error))
  // console.log(user)

  // find many users
  const users = await db
    .collection('users')
    .find({ age: 26 })
    .toArray()
    .catch((error) => console.error(error))
  console.log(users)

  const countUsers = await db
    .collection('users')
    .countDocuments({ age: 26 })
    .catch((error) => console.error(error))
  console.log(countUsers)
} catch (error) {
  console.error(error)
}
