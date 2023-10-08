import { appendFile } from 'fs/promises'
import validator from 'validator'
import { getNotes } from './notes'

// await Bun.write('notes.txt', 'My name is David. ')
// await appendFile('notes.txt', 'I am in my 20s.')

const notes = getNotes()
console.log(notes)

console.log(validator.isEmail('somename@example.com'))
console.log(validator.isURL('https://www.wealt.it'))
