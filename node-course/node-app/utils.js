const fs = require('fs');
const chalk = require('chalk')

const addNotes = (title, author) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => {
        return note.title === title && note.author === author
    })

    if (!duplicateNotes) {
        notes.push({
            title: title,
            author: author
        })
        saveNotes(notes)
        console.log(chalk.bold.inverse.green('Note added'))
    } else {
        console.log(chalk.bold.inverse.red('Note already exists'))
    }
}


const removeNotes = (title) => {
    const notes = loadNotes()
    const filterNotes = notes.filter((item) => {
        return item.title !== title

    })
    if (notes.length > filterNotes.length) {
        console.log(chalk.bold.inverse.green('removed'))
        saveNotes(filterNotes)
    } else {
        console.log(chalk.bold.inverse.red('already removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.blue.inverse(`Your notes`))
    notes.map((item) => {
        console.log(item.title)
    })
    // console.log(notes)
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })
    if (note) {
        console.log(chalk.bold.green.inverse('Your note: '))
        console.log(note.title)
        console.log(note.author)
    } else {
        console.log(chalk.bold.red.inverse('Error, write correct "title"!!!'))
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}