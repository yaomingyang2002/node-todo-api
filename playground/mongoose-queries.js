const {ObjectID} = require ('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const  {User} = require('./../server/models/user');

//mongoosejs.com/docs/queries.html
//find with Id ->valid id but not existed -> invalid ID catch err
let id ='59cddd877695d332585cfb8e'; //from Robo3T

if (!ObjectID.isValid(id)){
    console.log ('id is invalid!');
}
// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if (!todo){//valid id no item existed
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) =>console.log(e)); //invalid id


User.findById('59cc5437cd6b7733c84dadbe').then((user) =>{
    if (!user){//valid id no item existed
    return console.log('Unable find user');
    }
    console.log(JSON.stringify( user, undefined, 2));
    }, (e) =>   {
    console.log(e);
    }); //invalid id