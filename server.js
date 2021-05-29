const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const path = require('path');


const app = express();
const fs = require('fs');
const PORT = 3001;

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
