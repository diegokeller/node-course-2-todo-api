var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {

  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {

    if(!todo){
        return res.status(404).send();
    }

    return res.status(200).send({todo});

  }).catch((e) => {
      return res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Another task',
//   completed: false
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
//   console.log(e);
// });

// var secondTodo = new Todo({
//   text: '   Nova tarefa    '
// });
//
// secondTodo.save().then((doc) => {
//   console.log('Saved', doc);
// }).catch((e) => {
//   console.log('Unable to save', e);
// });
//
//
//
//
// var diego = new User({
//   email: ' email@teste.com '
// });
//
// diego.save().then((doc) => {
//   console.log(doc);
// }).catch((e) => {
//   console.log(e);
// });
