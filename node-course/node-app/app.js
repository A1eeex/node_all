const notes = require('./utils')
const yargs = require('yargs')
const chalk = require('chalk')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        author: {
            describe: 'author title',
            type: 'string',
        },
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.author)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
yargs.parse()
