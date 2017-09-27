// const MongoClient = require( 'mongodb').MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb');
// let obj = new ObjectID; // console.log(obj);

//ES6 destruncturing to make new var form an obj's properties
// let user ={name: 'mike', age:25};  // let {name} = user;
// console.log(name);

//conection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //insert a new item
    // db.collection ('Todo').insertOne({
    //     text: 'Somgthing to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log ('unable to insert todo', err);
    //     }
    //     console.log (JSON.stringify(result.ops, undefined, 2));
    // });

//insert new doc into Users (name, age, location)
//     db.collection ('Users').insertOne({
//         name: 'mike',
//         age: 25,
//         location: 'Montreal, QC'
//     }, (err, result) =>{
//         if (err) {
//             return console.log ('unable to insert Users', err);
//         }
//         console.log (JSON.stringify(result.ops, undefined, 2));
//         console.log ('The timestamp is');
//         console.log (result.ops[0]._id.getTimestamp());
//     });
    db.close();
});