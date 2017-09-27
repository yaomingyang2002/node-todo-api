// const MongoClient = require( 'mongodb').MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb');

//conection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todo').deleteMany({text: 'Eat lunch'}).then((result) =>{
//     console.log(result);
// });

//deleteOne
// db.collection('Todo').deleteOne({text: 'Eat lunch'}).then((result) =>{
//     console.log(result);
// });

//findOneAndDelete.
// db.collection('Todo').findOneAndDelete({completed: false}).then((result) =>{
//     console.log(result);
// });

//deleteMany in Users
// db.collection('Users').deleteMany({name: 'Arey'}).then((result) =>{
//     console.log(result);
// });

//deleteOne in Users
// db.collection('Users').deleteOne({name: 'sara'}).then((result) =>{
//     console.log(result);
// });

//findOneAndDelete in Users with _id -OK!
db.collection('Users').findOneAndDelete({
    _id: new ObjectID ('59cb08743a42021d34e3cfaa')
}).then((result) =>{
    console.log(JSON.stringify(result, undefined, 2));
});

// db.collection('Users').find().toArray().then((docs) => {
//     console.log('Users');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//     console.log('Unable to fetch Users', err);
// });

    db.close();
});