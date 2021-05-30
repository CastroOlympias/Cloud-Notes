const router = require("express").Router();
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

module.exports = router;