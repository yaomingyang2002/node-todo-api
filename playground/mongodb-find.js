// const MongoClient = require( 'mongodb').MongoClient;
const {MongoClient, ObjectID} = require( 'mongodb');

//conection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //fetch all items in a collection
//     db.collection('Todo').find().toArray().then((docs) => {
//         console.log('Todo');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) =>{
//         console.log('Unable to fetch Todo', err);
// });

    //fetch items not completed  in a collection
    // db.collection('Todo').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todo');
    // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch Todo', err);
    // });

//fetch items with _id  in a collection
//     db.collection('Todo').find({
//         _id: new ObjectID ('59cb05912ad6b507984f4942')
//     }).toArray().then((docs) => {
//         console.log('Todo');
//     console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) =>{
//         console.log('Unable to fetch Todo', err);
//     });

    //fetch items use count() in a collection
    // db.collection('Todo').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch Todo', err);
    // });

    //fetch all items in a collection
        db.collection('Users').find().toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) =>{
            console.log('Unable to fetch Users', err);
    });

    //fetch items not completed  in a collection
    db.collection('Users').find({name: 'Arey'}).toArray().then((docs) => {
        console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch Users', err);
    });

    //fetch items use count() in a collection
    db.collection('Users').find({name: 'Arey'}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) =>{
        console.log('Unable to fetch Users', err);
    });

    db.close();
});