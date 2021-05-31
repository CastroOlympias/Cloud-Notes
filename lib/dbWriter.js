const fs = require('fs');
const path = require('path');

function createNotes (body, notes,) {
    const newNotes = body;
    notes.push(newNotes);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return newNotes;
  }

  module.exports = createNotes;