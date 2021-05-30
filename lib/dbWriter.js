const fs = require('fs');
const path = require('path');




function createNewZookeeper(body, zookeepers) {
    const zookeeper = body;
    zookeepers.push(zookeeper);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ zookeepers }, null, 2)
    );
    return zookeeper;
  }

  function validateZookeeper(zookeeper) {
    if (!zookeeper.name || typeof zookeeper.name !== "string") {
      return false;
    }
    if (!zookeeper.age || typeof zookeeper.age !== "number") {
      return false;
    }
    if (
      !zookeeper.favoriteAnimal ||
      typeof zookeeper.favoriteAnimal !== "string"
    ) {
      return false;
    }
    return true;
  }


  module.exports = {createNewZookeeper, validateZookeeper};