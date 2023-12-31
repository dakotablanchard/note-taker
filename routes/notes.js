// Setting up Express.js router
const notes = require('express').Router();

// Import uuid generator
const { v4: uuidv4 } = require('uuid');

// Import helper functions 
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET Route for notes
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for specific note
notes.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.id === noteId);
        return result.length > 0
          ? res.json(result)
          : res.json('No note with that ID');
      });
  });

// POST Route for note
notes.post('/notes', (req, res) => {
    const { title, text, } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

// DELETE Route for note
 notes.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.id !== noteId);
  
        writeToFile('./db/db.json', result);
  
        res.json(`Item ${noteId} has been deleted`);
      });
  });


// Export module notes
module.exports = notes;