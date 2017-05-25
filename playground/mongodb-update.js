// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server', err);
  }
  console.log('Connected to MongoBD server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5898ffc891c72c0c981ce9bf")
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5899020c4301f51e9c7afb6c")
  }, {
    $set: {
      name: 'Diego Keller'
    },
    $inc: {
      age: 10
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
