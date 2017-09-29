let {ObjectID} = require ('mongodb');
let  express = require('express');
let bodyParser = require ('body-parser');

let {mongoose} = require ('./db/mongoose');
let {Todo} = require ('./models/todo');
let {User} = require ('./models/user');

let app = express();

app.use(bodyParser.json());

app.post ('/todos', (req, res)=>{
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send (doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos',  (req, res) =>{
    Todo.find().then ((todos) =>{
        res.send({  todos, });
    }, (e) => {
    res.status(400).send(e);
    });
});

//Get /todos/:id
app.get('/todos/:id',  (req, res) => {
      let id = req.params.id; // res.send(req.params)->test ok!
      //validate id using isValid
        if (!ObjectID.isValid(id)){
            return res.status (404).send('id invalid');
        }
        //findByID
        Todo.findById(id).then((todo) => {
            if (!todo){//valid id but no item existed
                return res.status (404).send('item not existed');
            }
            //success
            res.send({todo});
        }).catch((e) => {
            res.status (400).send();
        });
});

app.listen (3000, () => {
    console.log('Started up on port 3000');
});

module.exports = {app};
