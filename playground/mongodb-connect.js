// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server', err);
  }
  console.log('Connected to MongoBD server');

  // db.collection('Todos').insertOne({
  //   text: 'Task 1',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Diego',
  //   age: 29,
  //   location: 'Rua Frei Jose, 311, Blumenau'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to inser user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
