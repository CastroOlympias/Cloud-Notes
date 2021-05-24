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

  // notes.push(newNote);
  newNotes = fs.writeFileSync(
    path.join(__dirname, './Develop/db/db.json'),
    JSON.stringify({ newNote }, null, 2)
  );

  res.json(newNote);
});

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// function findById(title, notes) {
//   const result = notes.filter(notes => notes.title === title)[0];
//   return result;
// }

// function createNewAnimal(body, notes) {
//   const note = body;
//   notes.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, './Develop/db/db.json'),
//     JSON.stringify({ animals: notes }, null, 2)
//   );
//   return animal;
// }


// Listener
// =============================================================
// createNewAnimal();
// findById();

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
