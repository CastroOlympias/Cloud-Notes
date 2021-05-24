// Dependencies
// =============================================================
const express = require('express');
const path = require('path');


const app = express();
const notes = require('./Develop/db/db');
const fs = require('fs');
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  console.log(newNote)

  notes.push(newNote);
  res.json(notes);  
});

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
