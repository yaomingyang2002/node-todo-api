const {ObjectID} = require ('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const  {User} = require('./../server/models/user');

//mongoosejs.com/docs/
//mongoose have three way to delete record

 //Todo.remove({}) -> remove all records
// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

//find with Id ->valid id but not existed -> invalid ID catch err
let id ='59d072451a94a154b02de88c'; //from Robo3T

if (!ObjectID.isValid(id)){
    console.log ('id is invalid!');
}

// Todo.findOneAndRemove(_id): note use _id
// Todo.findOneAndRemove({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findByIdAndRemove(id): note use id
Todo.findByIdAndRemove(id).then((todo) =>{
    if (!todo){//valid id no item existed
        return console.log('Id not found');
    }
    console.log(todo);
}).catch((e) =>console.log(e)); //invalid id

