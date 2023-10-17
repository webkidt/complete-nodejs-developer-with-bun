import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getNotes, addNote, removeNote, listNotes, readNote } from './notes'

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
      listNotes()
    }
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        discribe: 'Note title',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
      readNote(argv.title)
    }
  })
  .version('1.1.0')
  .parse(hideBin(Bun.argv))

