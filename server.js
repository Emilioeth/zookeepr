const { animals } = require('./data/animals');
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;

const app = express();

//Make files inside the public folder available
app.use(express.static('public'));


// NEED BOTH OF THESE IN ORDER FOR POST AND PUT REQUESTS TO WORK //
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// NEED BOTH OF THESE IN ORDER FOR POST AND PUT REQUESTS TO WORK //

app.use('/api', apiRoutes);
app.use('/home', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});