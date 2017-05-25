const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "591d8ea972a686f0152b7fb311";
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById("589a278fe3c71f203188f1a3").then((user) => {
  if(!user){
    return console.log('User not found.');
  }
  console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log('Error finding user', e);
});
