import { appendFile } from 'fs/promises'
import validator from 'validator'
import chalk from 'chalk'
import { getNotes } from './notes'

// await Bun.write('notes.txt', 'My name is David. ')
// await appendFile('notes.txt', 'I am in my 20s.')

const notes = getNotes()
console.log(notes)

// console.log(validator.isEmail('somename@example.com'))
// console.log(validator.isURL('https://www.wealt.it'))

const success = chalk.blue.inverse.bold
// const warning = chalk.hex('#FFA500')
// const error = chalk.bold.red

console.log(success('Successful!'))
// console.log(warning('Warning!'))
// console.log(error('Error!'))

console.log(Bun.argv[2])
