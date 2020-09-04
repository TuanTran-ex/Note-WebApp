const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NoteApp', { useNewUrlParser: true });

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: String
});

const Note = mongoose.model('Note', NoteSchema, 'Note');

module.exports = Note;