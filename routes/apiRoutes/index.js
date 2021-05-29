const router = require("express").Router();
const notes = require('../../db/db');
const fs = require('fs');

router.post('/notes', (req, res,) => {
    const newNote = req.body;
    console.log(newNote)
  
    res.json(notes);
  });
  
  router.get('/notes', (req, res) => {
    res.json(notes);
  });


module.exports  = router;