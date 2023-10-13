import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getNotes, addNote, removeNote } from './notes'

yargs()
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Content of your note',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
      addNote(argv.title, argv.body)
    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      removeNote(argv.title)
    },
  })
  .command({
    command: 'list',
    describe: 'List your notes',
    handler() {
      console.log('Listing out all notes')
    }
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler() {
      console.log('Reading a note')
    }
  })
  .version('1.1.0')
  .parse(hideBin(Bun.argv))

