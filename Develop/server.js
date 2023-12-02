// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

const api = require('./routes/notes');
// Initialize an instance of Express.js
const app = express();


// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// ----- MIDDLEWARE -----
// Middleware to parse JSON-formatted request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
// Static middleware pointing to the public folder
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for homepage
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
