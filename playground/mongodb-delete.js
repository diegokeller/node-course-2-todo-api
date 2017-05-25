// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server', err);
  }
  console.log('Connected to MongoBD server');

  // db.collection('Todos').deleteMany({
  //   text: 'Task 3'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Task 3'
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID("58990a187554f7372348ca72")
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({
    name: 'Diego'
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
