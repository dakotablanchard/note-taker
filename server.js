// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path'
const path = require('path');

// Import API route notes.js 
const api = require('./routes/notes');

// Initialize an instance of Express.js
const app = express();

// Express.js server port
const PORT = process.env.PORT || 3001;

// ----- MIDDLEWARE -----
// Middleware to parse JSON-formatted request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Middleware pointing to notes.js
app.use('/api', api);
// Static middleware pointing to the public folder
app.use(express.static('public'));

// GET Route for welcome page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for homepage
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Console log saying which port the server is running on
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
