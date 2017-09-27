// const MongoClient = require( 'mongodb').MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb');

//conection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

//findOndAndUpdate
//     db.collection('Todo').findOneAndUpdate({
//         _id: new ObjectID ('59cb1cb41a94a154b02d7414')
//     }, {
//             $set:{
//                 completed: true
//             }
//         }, {
//             returnOriginal: false
//         }).then((result) =>{
//         console.log(JSON.stringify(result, undefined, 2));
//     });

    //in users: update name +increament age by 1

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID ('59cc072a1a94a154b02d8585')
    }, {
        $set: {  name: 'Jack Mike' },
        $inc:  {age: 5}
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});