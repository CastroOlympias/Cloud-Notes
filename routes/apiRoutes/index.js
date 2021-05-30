
const router = require("express").Router();

const fs = require('fs');
const path = require('path');
// const {uuid} = require('uuidv4');

const {createNewZookeeper, validateZookeeper} = require('../../lib/dbWriter.js')
const { zookeepers } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = zookeepers;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = zookeepers.length.toString();
  
    if (!validateZookeeper(req.body)) {
      res.status(400).send("The zookeeper is not properly formatted.");
    } else {
      const zookeeper = createNewZookeeper(req.body, zookeepers);
      res.json(zookeeper);
    }
  });

// router.post('/notes', (req, res,) => {
//     // const notes = req.body
//     req.body.id = notes.length.toString();
//     fs.writeFileSync(
//         path.join(__dirname, "../../db/db.json"),
//         JSON.stringify(notes, null, 2)
//     );
//     res.json(notes);
// });

module.exports = router;