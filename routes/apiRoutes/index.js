const router = require("express").Router();
const notes = require('../../db/db');

router.post('/notes', (req, res,) => {
    const newNote = req.body;
    console.log(newNote)
  
    return res.json(newNote);
  });
  
  router.get('/notes', (req, res) => {
    res.json(notes);
  });


module.exports  = router;