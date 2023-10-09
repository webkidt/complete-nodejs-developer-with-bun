import chalk from 'chalk'
import { getNotes } from './notes'

const command = Bun.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove' || 'rm') {
  console.log('remove note!')
}
