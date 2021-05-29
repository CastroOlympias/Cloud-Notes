const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { notes } = require('./db/db');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express.static makes the html assests reedily available
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server start listener
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
