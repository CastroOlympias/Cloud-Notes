const router = require("express").Router();
const createNotes = require('../../lib/dbWriter.js')
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
  

      const newNotes = createNotes(req.body, notes);
      res.json(newNotes);
    
  });

module.exports = router;