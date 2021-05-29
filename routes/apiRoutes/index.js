const router = require("express").Router();
const notes = require('../../db/db');
const fs = require('fs');
const path = require('path');


  
  router.get('/notes', (req, res) => {
    res.json(notes);
  });

  router.post('/notes', (req, res,) => {
    const newNotes = req.body;

    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes: newNotes }, null, 2)
      );
  
    return res.json(newNotes);
  });

module.exports  = router;