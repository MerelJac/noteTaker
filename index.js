const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
let db = require('./db/db.json')
const fs = require('fs');

const publicFolder = path.join(__dirname, '/public')

// calls the index.js file
app.use(express.static(publicFolder));
// middleware 
app.use(express.json());
app.use(bodyParser.json());


app.get('/notes', (req, res) => {
  res.sendFile(path.join(publicFolder, 'notes.html'));
})

app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to post a note`);
  db.push(req.body);
  fs.writeFile('db/db.json', JSON.stringify(db), () => {
    res.status(200).json({message: "Note successfully posted", data: db});
  });
})

app.get('/api/notes', (req, res) => {
  res.json(db)
})

// app.get('api/notes/:id', (req, res) => {
//   res.json();
// })
app.delete('/api/notes/:id', (req, res) => {
  let noteId = req.params.id;
  let updatedData = db.filter(note => note.id !== noteId);
  db = updatedData; 
  fs.writeFile('db/db.json', JSON.stringify(updatedData), () => {
    res.json({message: "Note successfully deleted", data: updatedData})
  })
})

// call server
app.listen(PORT, () => {
  console.log( `Listening on http://localhost:${PORT}`)
})