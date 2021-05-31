const router = require("express").Router();
const fs = require('fs');
const createNotes = require('../../lib/dbWriter.js')
let {notes} = require('../../db/db.json');
const path = require('path');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const newNotes = createNotes(req.body, notes);
  res.json(newNotes);
});

router.delete('/notes/:id', (req, res) => {
  req.body.id = notes.length.toString();
  let deleteId = req.params.id;
  let deleteObj = notes.find(user => user.id == deleteId);
  let deleteIndex = notes.indexOf(deleteObj);
  notes.splice(deleteIndex, 1);
  res.json(notes);
  console.log(deleteObj)
});

// This method right below here, works to delete, the same as the router.delete above. Leaving it for future reference

// router.delete('/notes/:id', (req, res) => {
//   let key = req.params.id;
//   for( let i=0; i<notes.length; i++){
//       if( notes[i].id === key ){
//           notes.splice(i,1);
//       }
//   }
//   res.json(notes);
// });

// This router.delete, from some turo help is actually more problematic as it does, delete the json file and update date it instanly, it also messes of the json file format so with a server restart, the router.get no longer works. (formmating issue when rewirting the db.json file. Leaving it for future reference)

// router.delete('/notes/:id', (req, res) => {
//   // req.body.id = notes.length.toString();
//   let deleteId = req.params.id;
//   let filterId = notes.filter(note => {
//     return note.id != deleteId
//   })

//   newData = JSON.stringify(filterId)
//   notes = filterId
//   fs.writeFileSync(
//     path.join(__dirname, '../../db/db.json'),
//      newData 
//   );
// });

module.exports = router;