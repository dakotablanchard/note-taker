// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = processs.env.PORT || 3001;

// ----- MIDDLEWARE -----
// Static middleware pointing to the public folder
app.use(express.static('public'));
// Middleware to parse JSON-formatted request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));