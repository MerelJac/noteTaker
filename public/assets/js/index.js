let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, '../../../public', 'index.html');
const publicFolder = path.join(__dirname, '../../../public')

// calls the index.js file
app.use(express.static(publicFolder));


app.get('/notes', (req, res) => {
  const notesPath = path.join(publicFolder, 'notes.html');
  res.sendFile(path.join(publicFolder, 'notes.html'));
  console.log('this is the notes page"')



})

// call server
app.listen(PORT, () => {
  console.log( `Listening on http://localhost:${PORT}`)
})