import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getNotes } from './notes'

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
    handler: function (argv) {
      console.log(`Title: ${argv.title}\nBody: ${argv.body}`)
    },
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
      console.log('Removing the note')
    },
  })
  .command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
      console.log('Listing out all notes')
    }
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
      console.log('Reading a note')
    }
  })
  .version('1.1.0')
  .parse(hideBin(Bun.argv))

