import chalk from 'chalk'

const getNotes = () => {
  return 'Your notes...'
}

const addNote = async (title, body) => {
  const notes = await loadNotes()

  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    })
    saveNotes(notes)
    console.log(chalk.bgGreen.bold('New note added!'))
  } else {
    console.log(chalk.bgRed.bold('Note title taken!'))
  }
}

const removeNote = async (title) => {
  const notes = await loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.bgGreen.bold('Note removed!'))
  } else {
    console.log(chalk.bgRed.bold('No note found!'))
  }
}

const listNotes = async () => {
  const notes = await loadNotes()
  console.log(chalk.blue.bold.underline('Your notes'))
  notes.forEach((note) => {
    console.log(` * ${note.title}`)
  })
}

const readNote = async (title) => {
  const notes = await loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.blue.underline.bold(note.title))
    console.log(' * ' + note.body)
  } else {
    console.log(chalk.bgRed.bold('No note found!'))
  }
}

const saveNotes = async (notes) => {
  const JSONData = JSON.stringify(notes)
  await Bun.write('notes.json', JSONData)
}

const loadNotes = async () => {
  try {
    const dataFile = Bun.file('notes.json')
    const dataObj = await dataFile.json()
    return dataObj
  } catch (err) {
    return []
  }
}

export { getNotes, addNote, removeNote, listNotes, readNote }
