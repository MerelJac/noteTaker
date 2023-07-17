const path = require('path')
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const db = require('../../../db/db.json')

const filePath = path.join(__dirname, '../../../public', 'index.html');
const publicFolder = path.join(__dirname, '../../../public')

// calls the index.js file
app.use(express.static(publicFolder));
// middleware 
app.use(express.json());


app.get('/notes', (req, res) => {
  res.sendFile(path.join(publicFolder, 'notes.html'));
})

app.get('/api/notes', (req, res) => {
  res.json(db)
})

// call server
app.listen(PORT, () => {
  console.log( `Listening on http://localhost:${PORT}`)
})