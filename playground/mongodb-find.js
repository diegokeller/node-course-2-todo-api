// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoBD server', err);
  }
  console.log('Connected to MongoBD server');

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Diego'}).toArray((err, docs) => {
    if (err) {
      console.log('Unable to fetch users.', err);
    }
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
