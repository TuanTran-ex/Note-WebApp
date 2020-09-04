const express = require('express');
const Note = require('./model/note.model');

// const db = require('./db');

const app = express();
const port = 5000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get('/api', function (req, res) {
  Note.find().sort({date: -1}).then(item => res.send(item));
});
app.get('/api/:id', function(req, res) {
  const id = req.params.id;
  Note.findById(id).then(item => res.send(item));
})
app.get('/search', function(req, res) {
  const searchText = req.query.searchText;
  Note.find({$or: [{content: {$regex: searchText}}, {title: {$regex: searchText}}]})
  .then(item => res.send(item));
})

app.post('/api', function (req, res) {
  var date = new Date();
  var options = { 
    weekday: 'long'
  };
  var weekDate = date.toLocaleDateString("en-US", options);
  var nowDate = date.toLocaleString();
  const newNote = Note.create({
    title: req.body.title,
    content: req.body.content,
    date: weekDate + ' ' + nowDate
  });
  res.send({newNote});
});

app.put('/api/:id', function(req, res) {
  const id = req.params.id;
  var date = new Date();
  var options = { 
    weekday: 'long'
  };
  var weekDate = date.toLocaleDateString("en-US", options);
  var nowDate = date.toLocaleString();
  const updateNote = Note.findByIdAndUpdate(id, {
    title: req.body.title,
    content: req.body.content,
    date: weekDate + ' ' + nowDate
  }).then( () => {res.send("Update done")} )
 
})

app.delete('/api/delete/:id', function(req, res) {
  Note.findByIdAndRemove(req.params.id).then(() => {
    Note.find().then(item => res.send(item));
  });
});

app.listen(port, function () {
  console.log('App listen on port ' + port);
});