const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove({_id: '5aa8b74c3ceb31adb8043dbb'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5aa8b74c3ceb31adb8043dbb').then((todo) => {
  console.log(todo);
});
