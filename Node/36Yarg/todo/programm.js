
const yargs = require('yargs')
const fs = require('fs')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)
        console.log("dataBuffer", dataBuffer);
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
 }

// const notes = loadNotes();
const addNotes = (title, body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)
    if(!duplicateNotes){
       notes.push({
          title:title,
          body:body
       })
       saveNotes(notes)
    console.log('New Note Added')
    }else{
       console.log('Note Already Exists')
    }
 }
yargs.command({
    command: 'add',
    describe: 'Enter description about command',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
            default: 'Cambi'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string",
            default: 'Cambi'
        }
    },
    handler(argv) {
        console.log('adding a new note', argv.title)
        addNotes(argv.title,argv.body)
    }
})
yargs.parse() 