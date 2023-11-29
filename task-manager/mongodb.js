import { MongoClient, ObjectId } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(url)
const id = new ObjectId()

try {
  await client.connect()
  const db = client.db(databaseName)

  // get task by id
  const task = await db
    .collection('tasks')
    .findOne({ _id: new ObjectId('655ac0c59c9eee80d7300883') })
    .catch((error) => console.error(error))
  console.log(task)

  // find all tasks that are not completed
  const tasks = await db
    .collection('tasks')
    .find({ completed: false })
    .toArray()
    .catch((error) => console.error(error))
  console.log(tasks)

  const countCompletedTasks = await db
    .collection('tasks')
    .countDocuments({ completed: true })
    .catch((error) => console.error(error))
  console.log(countCompletedTasks)
} catch (error) {
  console.error(error)
}
